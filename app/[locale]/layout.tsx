import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Bia Designer",
  description: "Portfólio de Bianca Herculano",
};

const locales = ["en", "pt"];

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

function LocaleLayout({ children, params: { locale } }: RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Header />

          {children}
          <footer></footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default LocaleLayout;
