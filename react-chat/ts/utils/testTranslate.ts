import TranslateUtils from './';

// TranslateUtils.translate("how r u", 'ru');
// TranslateUtils.detectLanguage("how r u");


async function examples() {
    let res = '';
    // res = await TranslateUtils.detectLanguage("how r u");
    // console.log(res);
    // res = await TranslateUtils.translate("how r u", 'ru');
    // console.log(res);
    // res = await TranslateUtils.translate("hello", 'ru');
    // console.log(res);
    // res = await TranslateUtils.translate("text", 'ru');
    // console.log(res);
    // res = await TranslateUtils.translate("hello", 'ru');
    res = await TranslateUtils.translate("what is it?", 'ru');
    console.log(res);
    res = await TranslateUtils.translate("what is it?", 'ru');
    console.log(res);
    console.log(TranslateUtils.cache)
}

examples();