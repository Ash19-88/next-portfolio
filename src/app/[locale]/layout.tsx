import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Locale, routing} from '@/i18n/routing';
import { Raleway, Alex_Brush } from 'next/font/google';
import "../../globals.css";
import { Metadata } from 'next';

const font_Raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font_Raleway',
  display: 'swap',
});

const font_alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font_alexBrush',
  display: 'swap',
});

interface Params {
  params: Promise<{ locale: string }>; 
}

interface SEO {
  title?: string;
  description?: string;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const seoMessages: SEO = typeof messages.SEO === 'object' ? (messages.SEO as SEO) : {};
  const name = "Ayelen Llampa";

  return {
    metadataBase: new URL("https://ashtech-solutions-portfolio.vercel.app"), 
    title: {
      default: seoMessages.title ?? `${name} | Frontend Developer`,
      template: `%s | ${name}`
    },
    description: seoMessages.description ?? `Portfolio profesional de Ayelen Llampa, desarrolladora web especializada en React, Next.js y TypeScript.`,
    icons: {
      icon: [
        { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
        { url: '/portfolio_logo.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: '/portfolio_logo.png',
    },
    openGraph: {
      title: seoMessages.title ?? `${name} | Frontend Developer`,
      description: seoMessages.description ?? `Portfolio profesional de Ayelen Llampa. Especialista en interfaces de alto impacto.`,
      images: [
        {
          url: '/og-image.png',  
          width: 1200, 
          height: 630,  
          alt: `Portfolio de Ayelen Llampa - Frontend Developer`  
        }
      ],
      url: 'https://ashtech-solutions-portfolio.vercel.app',
      siteName: `Ayelen Llampa Portfolio`,
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoMessages.title ?? `${name} | Frontend Developer`,
      description: seoMessages.description ?? `Portfolio profesional de Ayelen Llampa.`,
      images: ['/og-image.png'],
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({locale});

  return (
    <html lang={locale} className="scroll-smooth">
      {/* antialiased mejora mucho la legibilidad de fuentes delgadas en fondos oscuros */}
      <body className={`${font_Raleway.variable} ${font_alexBrush.variable} font-Raleway antialiased bg-[#0a0a0c] text-white`}>
        <NextIntlClientProvider messages={messages}>
          <main className="min-h-screen">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}