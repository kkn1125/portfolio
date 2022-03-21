export const _404 = {
    render: function (data, response) {
        return `<section page="${response}">
            <div class="text-center">
                <div class="h1">404</div>
                <div class="h6">Not Found</div>
                <div class="errorMsg">${data.message}</div>
            </div>
        </section>`;
    }
}