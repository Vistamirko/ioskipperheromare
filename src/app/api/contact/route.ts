import { NextResponse } from 'next/server'

function escapeHtml(str: unknown): string {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, contactInfo, period, experience, message } = body

    const userEmail = (email || (String(contactInfo || '').includes('@') ? contactInfo : '')).trim()
    const userPhone = (phone || (!String(contactInfo || '').includes('@') ? contactInfo : '')).trim()

    if (!name || (!userEmail && !userPhone && !contactInfo)) {
      return NextResponse.json(
        { status: 'error', message: 'Nome e almeno un recapito (email o telefono) sono obbligatori.' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'IoBioSkipper <noreply@iobioskipper.com>'
    const toEmails = (
      process.env.CONTACT_TO_EMAIL || 'vistamirko@me.com,prenotazioni@iorespiromare.com'
    )
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean)

    if (resendApiKey) {
      // 1. Email di notifica per Mirko / Admin
      const adminHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0c133a; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(98,180,228,0.3);">
          <div style="padding: 28px 32px; background: #1a265d; border-bottom: 1px solid rgba(98,180,228,0.2);">
            <p style="margin: 0; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #62b4e4; font-weight: 700;">
              IOBIOSKIPPER.COM · NUOVA RICHIESTA DI BORDO
            </p>
            <h1 style="margin: 8px 0 0; font-size: 24px; color: #ffffff;">
              Richiesta da ${escapeHtml(name)}
            </h1>
          </div>
          <div style="padding: 28px 32px; background: #ffffff; color: #0c133a;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; width: 140px; color: #1a265d;">Nome:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1a265d;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
                  ${userEmail ? `<a href="mailto:${escapeHtml(userEmail)}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${escapeHtml(userEmail)}</a>` : '<span style="color:#94a3b8;">Non fornita</span>'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1a265d;">Telefono / WA:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
                  ${userPhone ? `<strong>${escapeHtml(userPhone)}</strong>` : '<span style="color:#94a3b8;">Non fornito</span>'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1a265d;">Formula / Motivo:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${escapeHtml(experience || 'Non specificata')}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1a265d;">Periodo:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${escapeHtml(period || 'Non specificato')}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 700; color: #1a265d; vertical-align: top;">Messaggio:</td>
                <td style="padding: 10px 0; white-space: pre-wrap; color: #334155;">${escapeHtml(message || 'Nessuna nota aggiuntiva.')}</td>
              </tr>
            </table>
          </div>
        </div>
      `

      // 2. Email di ricevuta di conferma per l'utente
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)
      const userReceiptHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0c133a; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(98,180,228,0.3);">
          <div style="padding: 32px 32px 24px; background: #1a265d; border-bottom: 1px solid rgba(98,180,228,0.2); text-align: center;">
            <p style="margin: 0; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #62b4e4; font-weight: 700;">
              IOBIOSKIPPER.COM · RICEVUTA RICHIESTA
            </p>
            <h1 style="margin: 12px 0 4px; font-size: 26px; color: #ffffff; font-weight: 700; letter-spacing: 0.02em;">
              Richiesta ricevuta con successo!
            </h1>
            <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.85);">
              Grazie per avermi contattato, ${escapeHtml(name)}
            </p>
          </div>
          <div style="padding: 28px 32px; background: #ffffff; color: #0c133a;">
            <p style="font-size: 15px; line-height: 1.6; margin-top: 0; color: #1e293b;">
              Ciao <strong>${escapeHtml(name)}</strong>,<br/>
              ti confermo che ho ricevuto la tua richiesta per <strong>IoBioSkipper</strong>. Verificherò al più presto le disponibilità dell&apos;imbarcazione e dell&apos;itinerario per risponderti personalmente con tutte le informazioni.
            </p>

            <div style="margin: 24px 0; padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #0284c7;">
                Riepilogo della tua richiesta
              </p>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; color: #64748b; width: 140px;">Formula / Motivo:</td>
                  <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${escapeHtml(experience || 'Informazioni')}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b;">Periodo:</td>
                  <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${escapeHtml(period || 'Non specificato')}</td>
                </tr>
                ${userPhone ? `
                <tr>
                  <td style="padding: 6px 0; color: #64748b;">Telefono / WhatsApp:</td>
                  <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${escapeHtml(userPhone)}</td>
                </tr>
                ` : ''}
                ${message ? `
                <tr>
                  <td style="padding: 6px 0; color: #64748b; vertical-align: top;">Messaggio:</td>
                  <td style="padding: 6px 0; color: #334155; white-space: pre-wrap;">${escapeHtml(message)}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="font-size: 14px; color: #475569; margin: 0 0 14px;">
                Vuoi anticiparmi i dettagli o hai una richiesta urgente?
              </p>
              <a href="https://wa.me/393290160806" style="display: inline-block; background: #0c133a; color: #ffffff; text-decoration: none; padding: 12px 26px; border-radius: 9999px; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;">
                💬 Contattami su WhatsApp (+39 329 016 0806)
              </a>
            </div>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9; font-size: 13px; color: #64748b; line-height: 1.55;">
              <strong style="color: #0c133a; font-size: 14px;">Mirko Generoso Vista</strong><br/>
              Skipper · Guida Subacquea PSS · Appassionato di Biologia Marina · Autore di <em>«Io Respiro Mare»</em><br/>
              <a href="https://www.iobioskipper.com" style="color: #0284c7; text-decoration: none;">iobioskipper.com</a> · <a href="https://iorespiromare.com" style="color: #0284c7; text-decoration: none;">iorespiromare.com</a>
            </div>
          </div>
        </div>
      `

      const emailPromises = [
        // Invio email interna a Mirko
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: toEmails,
            ...(isValidEmail ? { reply_to: userEmail } : {}),
            subject: `[IoBioSkipper] Nuova richiesta da ${name} — ${experience || 'Info'}`,
            html: adminHtml,
          }),
        }),
      ]

      // Se l'utente ha fornito un'email valida, inviamo la ricevuta
      if (isValidEmail) {
        emailPromises.push(
          fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: fromEmail,
              to: [userEmail],
              reply_to: 'mirko@iobioskipper.com',
              subject: `Ricevuta richiesta di bordo — IoBioSkipper | Mirko Generoso Vista`,
              html: userReceiptHtml,
            }),
          })
        )
      }

      const results = await Promise.allSettled(emailPromises)
      for (const res of results) {
        if (res.status === 'fulfilled' && !res.value.ok) {
          const errText = await res.value.text()
          console.error('[IoBioSkipper] Resend API error:', errText)
        } else if (res.status === 'rejected') {
          console.error('[IoBioSkipper] Resend network error:', res.reason)
        }
      }
    }

    return NextResponse.json({
      status: 'success',
      message: 'Richiesta inviata correttamente.',
    })
  } catch (error) {
    console.error('[IoBioSkipper] Errore API contact:', error)
    return NextResponse.json(
      { status: 'error', message: 'Errore nella gestione della richiesta.' },
      { status: 500 }
    )
  }
}
