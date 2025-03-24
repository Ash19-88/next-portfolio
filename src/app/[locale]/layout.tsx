import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Locale, routing} from '@/i18n/routing';
import { Raleway, Alex_Brush } from 'next/font/google';
import "../../globals.css"
import { Metadata } from 'next';

const font_Raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font_Raleway'
});

const font_alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font_alexBrush'
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

  return {
    metadataBase: new URL("https://ashtech-solutions-portfolio.vercel.app"),
    title: seoMessages.title ?? 'AshTechSolutions',
    description: seoMessages.description ?? 'Portfolio de desarrolladora web especializada en React, Next.js y JavaScript.',
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      title: seoMessages.title ?? 'AshTechSolutions',
      description: seoMessages.description ?? 'Portfolio de desarrolladora web especializada en React, Next.js y JavaScript.',
      images: [
        {
          url: '/og-image.png',  
          width: 1200, 
          height: 630,  
          alt: 'Portfolio de AshTechSolutions - Desarrolladora web'  
        }
      ],
      url: 'https://ashtech-solutions-portfolio.vercel.app',
    },
  };
}


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
 

  const messages = await getMessages({locale});


 
  return (
    <html lang={locale}>
      <body className={`${font_Raleway.variable} ${font_alexBrush.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
