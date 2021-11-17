export const parseLink = link => {
    const gid = parseInt(link.split("/")[4]);
    const token = link.split("/")[5];
    return [gid, token];
};

export const parseCountryCode = language => {
    return {
        'japanese': 'jp',
        'english': 'gb',
        'chinese': 'cn',
        'dutch': 'nl',
        'french': 'fr',
        'german': 'de',
        'hungarian': 'hu',
        'italian': 'it',
        'korean': 'kr',
        'polish': 'pl',
        'portuguese': 'pt',
        'russian': 'ru',
        'spanish': 'es',
        'thai': 'th',
        'vietnamese': 'vn'
    }[language];
}