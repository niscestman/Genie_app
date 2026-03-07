import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, sujet, message } = await req.json()

    if (!nom || !email || !message || !sujet) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants.' },
        { status: 400 }
      )
    }

    // Email à Génie Corporation
    await resend.emails.send({
      from: 'Génie Corporation <onboarding@resend.dev>',
      to: 'nucfion01@gmail.com',
      replyTo: email,
      subject: `📩 Nouveau message – ${sujet}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1E3A8A; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nouveau message reçu</h1>
            <p style="color: #93c5fd; margin: 8px 0 0; font-size: 14px;">Via le formulaire de contact</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 30%;">Nom</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${nom}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">
                  <a href="mailto:${email}" style="color: #1E3A8A;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Téléphone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${telephone || 'Non renseigné'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Sujet</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="background-color: #dbeafe; color: #1E3A8A; padding: 3px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">${sujet}</span>
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Message</p>
              <div style="background-color: #f8fafc; border-left: 4px solid #1E3A8A; padding: 16px; border-radius: 4px; color: #374151; line-height: 1.6;">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="background-color: #1E3A8A; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Répondre à ${nom}
              </a>
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Génie Corporation SARL · 22 BP 700 Abidjan 22 · nucfion01@gmail.com
            </p>
          </div>
        </div>
      `,
    })

    // Email de confirmation au client
    await resend.emails.send({
      from: 'Génie Corporation <onboarding@resend.dev>',
      to: email,
      subject: '✅ Nous avons bien reçu votre message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1E3A8A; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Merci, ${nom} !</h1>
            <p style="color: #93c5fd; margin: 8px 0 0; font-size: 14px;">Votre message a bien été reçu</p>
          </div>
          <div style="padding: 32px;">
            <p style="color: #374151; line-height: 1.7;">
              Bonjour <strong>${nom}</strong>,<br/><br/>
              Nous avons bien reçu votre message concernant <strong>"${sujet}"</strong> et nous vous répondrons dans les plus brefs délais, généralement sous <strong>24h ouvrées</strong>.
            </p>
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Votre message :</p>
              <p style="color: #374151; font-style: italic; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="color: #374151; line-height: 1.7;">
              En attendant, vous pouvez nous joindre directement :<br/>
              📞 <strong>+225 05 05 91 09 97</strong><br/>
              📞 <strong>+225 01 53 05 05 05</strong>
            </p>
          </div>
          <div style="background-color: #1E3A8A; padding: 20px; text-align: center;">
            <p style="color: #93c5fd; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Génie Corporation SARL · Abidjan, Côte d'Ivoire
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    )
  }
}