class LoadComponents {
    constructor() {
        this.catalogContent = document.querySelector('.catalog-content');
        if (!this.catalogContent) {
            throw new Error('Не найден .catalog-content');
        }
        this.showComponents = 4;
        this.countComponents = 0;
        this.offset = 0;
        this.components = [];
        this.action = 'load';
        this.ajaxURL = 'modules/Component.php';
        this.loadComponentFromDB(this.action, this.ajaxURL, this.offset)
    }



    loadComponentFromDB(action, url, offset = 0) {
        let body = new FormData();
        body.append('action', action);
        body.append('component', this.getParamURL('component'))
        body.append('offset', Number(offset))
        body.append('limit', Number(this.showComponents))
        const req = fetch(url, {
            method: 'POST',
            body
        })
        this.setPreloader();
            req.then(data => data.json())
                .then(data => {
                    setTimeout(() => {
                        this.render(data)
                    }, 500)
                });
    }



    /**
     * Рисует компоненты на странице
     * @param {{}} data - массив компонентов и число всех компонентов
     */
    render(data) {
        this.catalogContent.innerHTML = '';
        this.catalogContent.insertAdjacentHTML('afterbegin', `
            <div class="catalog-content-items"></div>
        `);
        this.components = data['items'];
        this.countComponents = Number(data['count']);
        this.catalog = document.querySelector('.catalog-content-items');

        if (!this.catalog) {
            throw new Error('Не найден .catalog-content-items');
        }

        if (!this.components) {
            this.catalog.innerHTML = "<b>Пусто :(</b>"
            return
        }

        this.components.forEach((item) => {
            let params = []
            for (let key in item) {
                if (key !== 'name' && key !== 'id' && key !== 'image') {
                    params.push(`<span><b>${key.replaceAll('_', ' ')}</b>: ${item[key]}</span><br>`);
                }
            }
            this.catalog.innerHTML += `
            <div class="catalog-content__item">
                <div class="catalog-content__item-image">
                    <img width="100" src="${item['image']}">
                </div>
                <div class="catalog-content__item-info">
                    <h2>${item['name']}</h2>
                    <div>
                        ${params.join('')}
                    </div>
                </div>
            </div>
            `
        })

        if (this.countComponents > this.showComponents) {
            this.setPagination();
        }
    }



    setPagination() {

        if (this.pagination) {
            this.pagination.remove();
        }

        const lastPage  = (count, showItems) => {
            let lastPage = null
            if (count % showItems != 0) {
                lastPage = Math.ceil(count / showItems);
            } else {
                lastPage = count / showItems;
            }
            return lastPage
        }

        let pagination = this.pagination = document.createElement('div');
        pagination.classList.add('catalog-content-pagination');
        this.catalog.insertAdjacentElement('afterEnd', pagination);
        pagination.insertAdjacentHTML('afterBegin', `
            <button offset class="catalog-pagination__btn prev">Prev page</button>
            <span class="catalog-pagination__pages">
                ${localStorage.getItem('page')} из ${lastPage(this.countComponents, this.showComponents)}
            </span>
            <button offset class="catalog-pagination__btn next">Next Page</button>
        `);

        const paginationBtns = pagination.querySelectorAll('.catalog-pagination__btn');
        paginationBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                
                let getComponents = move => {
                    btn.setAttribute('offset', Number(localStorage.getItem(move)) * this.showComponents - this.showComponents)
                    this.offset = btn.getAttribute('offset');
                    this.loadComponentFromDB(this.action, this.ajaxURL, this.offset)
                }
    
                if (btn.classList.contains('next')) {
                    if (localStorage.getItem('page') < lastPage(this.countComponents , this.showComponents)) {
                        localStorage.setItem('page', Number(localStorage.getItem('page')) + 1)
                    } else {
                        localStorage.setItem('page', 1)
                    } 
                } else {
                    if (localStorage.getItem('page') == 1) {
                        localStorage.setItem('page', lastPage(this.countComponents , this.showComponents))
                    } else {
                        localStorage.setItem('page',  localStorage.getItem('page') - 1)
                    }
                }
                getComponents('page');
                 
            })
        })
    }



    setPreloader() {
        this.catalogContent.innerHTML = '';
        this.catalogContent.insertAdjacentHTML('afterbegin', `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="197px" height="197px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="0" fill="none" stroke="#0051a2" stroke-width="2">
            <animate attributeName="r" repeatCount="indefinite" dur="1.2987012987012987s" values="0;35" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6493506493506493s"></animate>
            <animate attributeName="opacity" repeatCount="indefinite" dur="1.2987012987012987s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6493506493506493s"></animate>
            </circle>
            <circle cx="50" cy="50" r="0" fill="none" stroke="#1b75be" stroke-width="2">
            <animate attributeName="r" repeatCount="indefinite" dur="1.2987012987012987s" values="0;35" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
            <animate attributeName="opacity" repeatCount="indefinite" dur="1.2987012987012987s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
            </circle>
            </svg>
        `)
    }



    getParamURL(key) {
        let p = window.location.search;
        p = p.match(new RegExp(key + '=([^&=]+)'));
        return p ? p[1] : false;
    }


    
}

export default LoadComponents;