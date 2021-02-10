const e = React.createElement;
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.images = ['public/images/webagency_images/slider/bg1.jpg', 'public/images/webagency_images/slider/bg2.jpg'];
        this.timer = 5000;
        this.state = {
            index: 0,
            progress: 1,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => 
            this.nextSlide(), 5000);

        this.progression = setInterval(() => 
            this.progressBar(), 50);
    }

    progressBar() {
        this.setState({
            progress: this.state.progress + 1
        })

        if (this.state.progress > 100) {
            this.setState({
                progress: 1
            })
        }
    }

    nextSlide() {

        if (this.state.index === this.images.length - 1) {
            this.setState({
                index: 0
            })
        } else if (this.state.index < this.images.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        }

    }

    conmponentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.progression);
    }

    resetInterval() {
        this.conmponentWillUnmount();
        this.componentDidMount();
    }

    handlePreviousClick() {
        
        if (this.state.index === 0) {
            this.setState({
                index: this.images.length - 1,
                progress: 1
            })
            this.resetInterval();
        } else if (this.state.index === this.images.length - 1) {
            this.setState({
                index: this.state.index - 1,
                progress: 1
            })
            this.resetInterval();
        }

    }

    handleNextClick() {
        if (this.state.index === 0) {
            this.setState({
                index: this.state.index + 1,
                progress: 1
            })
            this.resetInterval();
        } else if (this.state.index === this.images.length - 1) {
            this.setState({
                index: 0,
                progress: 1
            })
            this.resetInterval();
        }
    }

    render() {

        return (
            e("div", { id: "accueil" },
                e("img", { src: this.images[this.state.index], alt: "Fillette aux mains color\xE9es" }),
                e("div", { className: 'loading' },
                    e("div", { className: 'loading_bar', style:{ width: this.state.progress + '%' }})
                ),
                e("div", { id: "chevron_gauche" },
                    e("i", { className: "fas fa-chevron-left", onClick: () => {this.handlePreviousClick() }})
                ), 
                e("div", { id: "chevron_droit" },
                    e("i", { className: "fas fa-chevron-right", onClick: () => {this.handleNextClick() }})
                ),
                e("div", { id: "presentation" },
                    e("h1", null,
                       e("strong", null, "WEBAGENCY"),
                        " :  L'AGENCE DE TOUS VOS PROJETS !"),
                        e("p", null, "Vous avez un projet web? La WebAgency vous aide \xE0 le r\xE9aliser!"),
                    e("a", { href: "#contact" }, "Plus d'infos")
                )
            )
        )
    }
}
const domContainer = document.querySelector('#slider_component');
ReactDOM.render(e(Slider), domContainer);