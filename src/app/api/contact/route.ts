import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, contactInfo, period, experience, message } = body

    if (!name || !contactInfo) {
      return NextResponse.json(
        { status: 'error', message: 'Nome e contatto sono obbligatori.' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'IoSkippheroMare <noreply@advbrains.com>'
    const toEmails = (
      process.env.CONTACT_TO_EMAIL || 'vistamirko@me.com,prenotazioni@iorespiromare.com'
    )
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean)

    const isEmailContact = String(contactInfo).includes('@')

    if (resendApiKey) {
      const htmlContent = `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #0c133a; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(98,180,228,0.3);">
          <div style="padding: 28px 32px; background: #1a265d; border-bottom: 1px solid rgba(98,180,228,0.2);">
            <p style="margin: 0; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #62b4e4; font-weight: 700;">
              IOSKIPPHEROMARE.IT · NUOVA RICHIESTA DI BORDO
            </p>
            <h1 style="margin: 8px 0 0; font-size: 24px; color: #ffffff;">
              Richiesta da ${String(name)}
            </h1>
          </div>
          <div style="padding: 28px 32px; background: #ffffff; color: #0c133a;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; width: 160px; color: #1a265d;">Nome:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${String(name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1a265d;">Contatto:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>${String(contactInfo)}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1a265d;">Esperienza:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${String(experience || 'Non specificata')}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1a265d;">Periodo:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${String(period || 'Non specificato')}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 700; color: #1a265d; vertical-align: top;">Messaggio:</td>
                <td style="padding: 10px 0; white-space: pre-wrap;">${String(message || 'Nessuna nota aggiuntiva.')}</td>
              </tr>
            </table>
          </div>
        </div>
      `

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: toEmails,
          ...(isEmailContact ? { reply_to: String(contactInfo).trim() } : {}),
          subject: `[IoSkippheroMare] Nuova richiesta da ${name} — ${experience || 'Info'}`,
          html: htmlContent,
        }),
      })

      if (!resendRes.ok) {
        const errText = await resendRes.text()
        console.error('[IoSkippheroMare] Resend API error:', errText)
        return NextResponse.json(
          { status: 'error', message: 'Errore invio email tramite Resend.' },
          { status: 502 }
        )
      }
    }

    return NextResponse.json({
      status: 'success',
      message: 'Richiesta inviata correttamente.',
    })
  } catch (error) {
    console.error('[IoSkippheroMare] Errore API contact:', error)
    return NextResponse.json(
      { status: 'error', message: 'Errore nella gestione della richiesta.' },
      { status: 500 }
    )
  }
}
