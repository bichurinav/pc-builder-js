import {findParent, changeFormatPrice} from "@/js/utils";
import Pagination from "@/js/Catalog/Pagination";
import Delete from "@/js/Admin/Delete";
import EventEmitter from 'events'

class Cards extends EventEmitter {
    constructor(options) {
        super()
        this.$catalog = options.catalog
        this.components = options.cards
        this.count = options.count
        this.show = options.show
        this.imagesPath = options.imagesPath
        this.ajaxURL = options.ajaxURL
        this.pagination = new Pagination({
            count: this.count,
            show: this.show,
            catalog: this.$catalog
        })
    }

    render() {
        if (this.components) {
            this.components = this.components.map((component, index) => {
                let params = []
                for (let key in component) {
                    if (key !== 'name' && key !== 'id' && key !== 'image' && key !== 'Цена') {
                        params.push(`<div class="card__prop"><b>${key.replaceAll('_', ' ')}</b>: ${component[key]}</div>`);
                    }
                }
                const previewParams = params.filter((el, i) => i <= 2)
                return `
                <div class="card catalog-content__item">
                    <div class="card__img">
                        <img width="100" src="${component['image']}">
                    </div>
                    <div class="card__content">
                        <h2 class="card__title">${component['name']}</h2>
                        <div class="card__preview-props">
                             ${previewParams.join('')}
                            <button class="btn card__btn-more">
                                ${screen.width < 450 ? 'Характеристики' : 'Все характеристики'}
                            </button>
                        </div>
                        <span class="card__price">
                            &asymp; ${changeFormatPrice(component['Цена'])}
                        </span>
                    </div>
                    <button class="btn card__btn-box">
                        <img src="${this.imagesPath}/box.svg">
                    </button>
                    <div class="card__props">
                        <div class="card__props-inner">
                            ${params.join('')}
                            
                        </div>
                        <button class="btn card__props-close">&#10006;</button>
                    </div>
                    <button class="btn card__del">
                        <span class="material-icons">
                            backspace
                        </span>
                    </button>
                </div>
                `
            }).join('')
        } else {
            this.components = `<h2>Пусто :(</h2>`
        }


        this.$catalog.insertAdjacentHTML('afterbegin', `
            <div class="catalog-content-items">
                 ${this.components}
            </div>
        `);

        window.addEventListener('resize', () => {
            let moreButtons =  document.querySelectorAll('.card__btn-more')
            moreButtons.forEach((btn) => {
                btn.textContent = screen.width < 425 ? 'Характеристики' : 'Все характеристики'
            })
        })

        // addEventListener - properties
        this.btnsProps = document.querySelectorAll('.card__btn-more');
        this.btnsProps.forEach(btn => {
            btn.addEventListener('click', this.showProps.bind(this))
        })

        if (document.querySelector('.admin-panel')) {
            new Delete('.card__del', this.ajaxURL);
        }

        if (this.count > this.show) {
            this.pagination.render()
            this.pagination.on('getComponents', (offset) => this.emit('getComponents', offset))
        }
    }

    showProps(event) {
        const btn = event.target
        const blockProps = findParent(btn, 'card').querySelector('.card__props');
        blockProps.style.display = "flex";
        const card = findParent(blockProps, 'catalog-content__item');
        card.addEventListener('click', this.closeProps.bind(this, blockProps))
    }

    closeProps(blockProps, event) {
        if (event.target.classList.contains('card__props-close')) {
            blockProps.style.display = "none";
        }
    }


}

export default Cards;