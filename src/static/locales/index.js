import I18n from 'react-native-i18n';
import en from './en';
import th from './th';

I18n.fallbacks = true;

I18n.translations = {
    en,
    th,
};

export default I18n;
