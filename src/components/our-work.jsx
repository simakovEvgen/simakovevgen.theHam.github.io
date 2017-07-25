import React from 'react';



export default class OurWork extends React.Component{


    constructor(){
        super();
        this.state = {
            constIMG: [
                {url: 'img/img0010.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0011.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0012.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0013.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0027.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0035.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0037.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0045.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0014.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0023.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0019.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0050.jpg', type: 'cars', category: 'Wordpress'},

                {url: 'img/img0002.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0007.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0009.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0017.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0022.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0025.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0031.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0032.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0033.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0034.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0041.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0040.jpg', type: 'games', category: 'Web Design'},

                {url: 'img/img0008.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0016.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0020.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0015.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0024.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0021.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0028.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0029.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0039.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0042.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0051.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0052.jpg', type: 'nature', category: 'Landing Pages'},

                /*{url: 'img/img0003.jpg', type: 'other'},
                {url: 'img/img0005.jpg', type: 'other'},
                {url: 'img/img0004.jpg', type: 'other'},
                {url: 'img/img0026.jpg', type: 'other'},
                {url: 'img/img0030.jpg', type: 'other'},
                {url: 'img/img0038.jpg', type: 'other'},
                {url: 'img/img0043.jpg', type: 'other'},
                {url: 'img/img0044.jpg', type: 'other'},
                {url: 'img/img0046.jpg', type: 'other'},
                {url: 'img/img0047.jpg', type: 'other'},
                {url: 'img/img0048.jpg', type: 'other'},
                {url: 'img/img0001.jpg', type: 'other'},*/

                {url: 'img/img0018.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0036.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0049.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0006.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0053.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0054.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0055.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0056.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0057.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0058.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0059.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0060.jpg', type: 'city', category: 'Graphic Design'}
            ],
            images: [
                {url: 'img/img0010.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0002.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0008.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0018.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0050.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0025.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0040.jpg', type: 'games', category: 'Web Design'},
                {url: 'img/img0052.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0060.jpg', type: 'city', category: 'Graphic Design'},
                {url: 'img/img0035.jpg', type: 'cars', category: 'Wordpress'},
                {url: 'img/img0024.jpg', type: 'nature', category: 'Landing Pages'},
                {url: 'img/img0055.jpg', type: 'city', category: 'Graphic Design'}
            ]
        };
        this.filterCategory1 = this.filterCategory1.bind(this);
        this.filterCategory2 = this.filterCategory2.bind(this);
        this.filterCategory3 = this.filterCategory3.bind(this);
        this.filterCategory4 = this.filterCategory4.bind(this);
        this.filterCategoryAll = this.filterCategoryAll.bind(this);
        this.searchSimilar = this.searchSimilar.bind(this);
    }

    searchSimilar(event){
        var filteredImgCat1 = this.state.constIMG.filter(function(el) {
            if(el.category == event.target.dataset.category){
                return el
            }
        });
        this.setState({
            images: filteredImgCat1
        })
    }

    filterCategory1(){
        var filteredImgCat1 = this.state.constIMG.filter(function(el) {
            if(el.type == 'city'){
                return el
            }
        });
        this.setState({
            images: filteredImgCat1
        })
    }

    filterCategory2(){
        var filteredImgCat1 = this.state.constIMG.filter(function(el) {
            if(el.type == 'games'){
                return el
            }
        });
        this.setState({
            images: filteredImgCat1
        })
    }

    filterCategory3(){
        var filteredImgCat2 = this.state.constIMG.filter(function(el) {
            if(el.type == 'nature'){
                return el
            }
        });
        this.setState({
            images: filteredImgCat2
        })
    }

    filterCategory4(){
        var filteredImgCat1 = this.state.constIMG.filter(el => {
            if(el.type == 'cars'){
                return el
            }
        });
        this.setState({
            images: filteredImgCat1
        })
    }

    filterCategoryAll(){
        let max = 47,
            min = 1;
        let arr = this.state.constIMG;
        let filteredImgAll = [];

        for(let i = 0; i<12; i++){
            let rand = min + Math.floor(Math.random() * (max + 1 - min));
            console.log(rand)
            filteredImgAll.push(arr[rand]);
        }
        console.log(filteredImgAll)
        this.setState({
            images: filteredImgAll
        })
    }

    render() {
        return (
            <div id="portfolio"  className="our-work">
                <h1>Our Amazing Work</h1>
                <div className="lines">
                    <hr className="top-line"/>
                    <hr className="bottom-line"/>
                </div>
                <div className="tabs">
                    <div className="tab">
                        <div onClick={this.filterCategoryAll}>All</div>
                    </div>
                    <div className="tab">
                        <div onClick={this.filterCategory1}>Graphic Design</div>
                    </div>
                    <div className="tab">
                        <div onClick={this.filterCategory2}>Web Design</div>
                    </div>
                    <div className="tab">
                        <div onClick={this.filterCategory3}>Landing Pages</div>
                    </div>
                    <div className="tab">
                        <div onClick={this.filterCategory4}>Wordpress</div>
                    </div>
                </div>
                <div className="portfolio max-1200">
                    {
                        this.state.images.map((el, i)=>{
                            return (
                                <div key={i} className="img-portfolio">
                                    <img src={el.url} alt={el.type} />
                                    <div className="img-info">
                                        <div className="circles">
                                            <span className="link"></span>
                                            <span className="search" data-category={el.category} onClick={this.searchSimilar}></span>
                                        </div>
                                        <div className="text">
                                            <h3>CREATIVE DESIGN</h3>
                                            <p>{el.category}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

class Portfolio extends React.Component{
    constructor(){
        super();
        this.state = {
            constIMG: [
                {url: 'img/img0010.jpg', type: 'cars'},
                {url: 'img/img0011.jpg', type: 'cars'},
                {url: 'img/img0012.jpg', type: 'cars'},
                {url: 'img/img0013.jpg', type: 'cars'},
                {url: 'img/img0027.jpg', type: 'cars'},
                {url: 'img/img0035.jpg', type: 'cars'},
                {url: 'img/img0037.jpg', type: 'cars'},
                {url: 'img/img0045.jpg', type: 'cars'},
                {url: 'img/img0014.jpg', type: 'cars'},
                {url: 'img/img0023.jpg', type: 'cars'},
                {url: 'img/img0019.jpg', type: 'cars'},
                {url: 'img/img0050.jpg', type: 'cars'},

                {url: 'img/img0002.jpg', type: 'games'},
                {url: 'img/img0007.jpg', type: 'games'},
                {url: 'img/img0009.jpg', type: 'games'},
                {url: 'img/img0017.jpg', type: 'games'},
                {url: 'img/img0022.jpg', type: 'games'},
                {url: 'img/img0025.jpg', type: 'games'},
                {url: 'img/img0031.jpg', type: 'games'},
                {url: 'img/img0032.jpg', type: 'games'},
                {url: 'img/img0033.jpg', type: 'games'},
                {url: 'img/img0034.jpg', type: 'games'},
                {url: 'img/img0041.jpg', type: 'games'},
                {url: 'img/img0040.jpg', type: 'games'},

                {url: 'img/img0008.jpg', type: 'nature'},
                {url: 'img/img0016.jpg', type: 'nature'},
                {url: 'img/img0020.jpg', type: 'nature'},
                {url: 'img/img0015.jpg', type: 'nature'},
                {url: 'img/img0021.jpg', type: 'nature'},
                {url: 'img/img0024.jpg', type: 'nature'},
                {url: 'img/img0028.jpg', type: 'nature'},
                {url: 'img/img0029.jpg', type: 'nature'},
                {url: 'img/img0039.jpg', type: 'nature'},
                {url: 'img/img0042.jpg', type: 'nature'},
                {url: 'img/img0051.jpg', type: 'nature'},
                {url: 'img/img0052.jpg', type: 'nature'},

                {url: 'img/img0003.jpg', type: 'other'},
                {url: 'img/img0005.jpg', type: 'other'},
                {url: 'img/img0004.jpg', type: 'other'},
                {url: 'img/img0026.jpg', type: 'other'},
                {url: 'img/img0030.jpg', type: 'other'},
                {url: 'img/img0038.jpg', type: 'other'},
                {url: 'img/img0043.jpg', type: 'other'},
                {url: 'img/img0044.jpg', type: 'other'},
                {url: 'img/img0046.jpg', type: 'other'},
                {url: 'img/img0047.jpg', type: 'other'},
                {url: 'img/img0048.jpg', type: 'other'},
                {url: 'img/img0001.jpg', type: 'other'},

                {url: 'img/img0018.jpg', type: 'city'},
                {url: 'img/img0036.jpg', type: 'city'},
                {url: 'img/img0049.jpg', type: 'city'},
                {url: 'img/img0006.jpg', type: 'city'},
                {url: 'img/img0053.jpg', type: 'city'},
                {url: 'img/img0054.jpg', type: 'city'},
                {url: 'img/img0055.jpg', type: 'city'},
                {url: 'img/img0056.jpg', type: 'city'},
                {url: 'img/img0057.jpg', type: 'city'},
                {url: 'img/img0058.jpg', type: 'city'},
                {url: 'img/img0059.jpg', type: 'city'},
                {url: 'img/img0060.jpg', type: 'city'},
            ],
            images: []
        };
        this.filterCategory1 = this.filterCategory1.bind(this);
        this.filterCategory2 = this.filterCategory2.bind(this);
    }



    filterCategory1(){
        var filteredImgCat1 = this.state.constIMG.filter(function(el) {
            if(el.type == 1){
                return el
            }
        });
        this.setState({
            images: filteredImgCat1
        })
    }


    filterCategory2(){
        var filteredImgCat2 = this.state.constIMG.filter(function(el) {
            if(el.type == 2){
                return el
            }
        });
        this.setState({
            images: filteredImgCat2
        })
    }



    render(){
        return (<div>
            <div>
                <button onClick={this.filterCategory1}>1</button>
                <button onClick={this.filterCategory2}>2</button>
                <button>3</button>
                <button>4</button>
            </div>
            <div>
                {
                    this.state.images.map((el, i)=>{console.log(el); return <img src={el.url} alt={el.type} key={i}/>})
                }
            </div>
        </div>)
    }
}