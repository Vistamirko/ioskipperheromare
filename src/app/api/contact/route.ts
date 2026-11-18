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

    // Log della richiesta sul server (facilmente collegabile a Nodemailer / Resend / Directus)
    console.log('[IoSkippheroMare] Nuova richiesta di imbarco:', {
      name,
      contactInfo,
      period,
      experience,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      status: 'success',
      message: 'Richiesta ricevuta correttamente.',
    })
  } catch (error) {
    console.error('[IoSkippheroMare] Errore API contact:', error)
    return NextResponse.json(
      { status: 'error', message: 'Errore nella gestione della richiesta.' },
      { status: 500 }
    )
  }
}
