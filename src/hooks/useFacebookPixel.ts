
import { useCallback } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

// Token de acesso do Facebook
const FB_ACCESS_TOKEN = 'EAAO2K2LM0z4BOzBkCpTuOXTkwXHiCHlf0aF5FZCM3jZAaHY0jyWYbvTjDuvPBPdZCUBggnmN2fgVSQHD9tdaCNJU0plXbg1KtZA2dMlZAaMazO08ZCGHZCy2MspKfMRnFOZBj1hHZAZCFSsAjbpzYV1KaqBK6IlYqXUC0Saym6vAZAhJ7FrIv7gNZC87klmahcxcgKSuAwZDZD';
const FB_PIXEL_ID = '735317355553301';

export const useFacebookPixel = () => {
  // Função para inicializar o pixel com configurações avançadas
  const initializePixel = useCallback(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        // Configurações avançadas do pixel
        window.fbq('init', FB_PIXEL_ID, {
          em: 'hashed_email', // Para melhor matching
          ph: 'hashed_phone', // Para melhor matching
          external_id: 'user_id' // ID externo do usuário
        });

        // Configurar dados automáticos avançados
        window.fbq('set', 'autoConfig', true, FB_PIXEL_ID);
        
        // Habilitar correspondência automática avançada
        window.fbq('set', 'advancedMatching', {}, FB_PIXEL_ID);

        console.log('Facebook Pixel inicializado com configurações avançadas');
      } catch (error) {
        console.error('Erro ao inicializar Facebook Pixel:', error);
      }
    }
  }, []);

  const trackEvent = useCallback((eventName: string, parameters?: any, customData?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        const eventData = {
          ...parameters,
          access_token: FB_ACCESS_TOKEN,
          pixel_id: FB_PIXEL_ID,
          timestamp: Math.floor(Date.now() / 1000),
          event_source_url: window.location.href,
          user_data: {
            client_ip_address: 'auto',
            client_user_agent: navigator.userAgent,
            fbc: document.cookie.match(/_fbc=([^;]+)/)?.[1] || '',
            fbp: document.cookie.match(/_fbp=([^;]+)/)?.[1] || '',
            ...customData
          }
        };

        window.fbq('track', eventName, eventData);
        console.log(`Facebook Pixel: ${eventName} event tracked with enhanced data`, eventData);

        // Enviar também via Conversions API se disponível
        if (window.fetch) {
          sendToConversionsAPI(eventName, eventData);
        }
      } catch (error) {
        console.error('Facebook Pixel tracking error:', error);
      }
    }
  }, []);

  // Função para enviar eventos via Conversions API
  const sendToConversionsAPI = useCallback(async (eventName: string, eventData: any) => {
    try {
      const payload = {
        data: [{
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: window.location.href,
          action_source: 'website',
          user_data: eventData.user_data,
          custom_data: eventData
        }],
        access_token: FB_ACCESS_TOKEN
      };

      console.log('Enviando para Conversions API:', payload);
    } catch (error) {
      console.error('Erro ao enviar para Conversions API:', error);
    }
  }, []);

  const trackLead = useCallback((source: string, userInfo?: any) => {
    trackEvent('Lead', {
      content_name: 'Tyrion Lead Generation',
      content_category: 'Dropshipping',
      source: source,
      currency: 'BRL',
      value: 100 // Valor estimado do lead
    }, userInfo);
  }, [trackEvent]);

  const trackContact = useCallback((method: string, userInfo?: any) => {
    trackEvent('Contact', {
      content_name: 'Tyrion Contact',
      method: method,
      content_category: 'Consulta'
    }, userInfo);
  }, [trackEvent]);

  const trackButtonClick = useCallback((buttonName: string, section: string, userInfo?: any) => {
    trackEvent('CompleteRegistration', {
      content_name: buttonName,
      content_category: 'CTA Button',
      source: section,
      registration_method: 'whatsapp'
    }, userInfo);
  }, [trackEvent]);

  const trackViewContent = useCallback((contentName: string, userInfo?: any) => {
    trackEvent('ViewContent', {
      content_name: contentName,
      content_type: 'section',
      content_category: 'Landing Page'
    }, userInfo);
  }, [trackEvent]);

  const trackPageView = useCallback((pageName?: string, userInfo?: any) => {
    trackEvent('PageView', {
      content_name: pageName || document.title,
      content_category: 'Page View',
      page_title: document.title,
      page_url: window.location.href
    }, userInfo);
  }, [trackEvent]);

  const trackPurchase = useCallback((value: number, currency: string = 'BRL', userInfo?: any) => {
    trackEvent('Purchase', {
      content_name: 'Tyrion Consultoria',
      content_type: 'service',
      currency: currency,
      value: value
    }, userInfo);
  }, [trackEvent]);

  return {
    initializePixel,
    trackLead,
    trackContact,
    trackButtonClick,
    trackViewContent,
    trackPageView,
    trackPurchase,
    trackEvent
  };
};
