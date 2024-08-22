(function() {
    const baseurl = 'https://viddownloader.tech.nagoyatv.com/';

    SQR.modal = (() => {
        const result = document.querySelector('#js-result');
        const link = document.querySelector('#js-link');
        const modal = document.querySelector('#js-modal');

        const open = (url) => {
            const fullLink = baseurl + url;
            result.value = fullLink;
            link.setAttribute('href', fullLink);
            modal.classList.add('is-show');

            // 自動的に生成されたURLにリダイレクトする
            window.location.href = fullLink;
        };

        return {
            open,
        };
    })();
})();
