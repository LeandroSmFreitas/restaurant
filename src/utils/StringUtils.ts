import { useTranslation } from "react-i18next";

const formatDescription = (description: string) => {
    if (description) {
      return description.substring(0, 58) + '...';
    }
}

const formatCurrency = (value: number) => {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'en' ? 'en-US' : 'pt-BR';
  const currency = locale === 'en-US' ? 'USD' : 'BRL';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
  
};

export const StringUtils = {
    formatDescription,
    formatCurrency
}