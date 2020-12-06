import React, { Component } from 'react'

export const DataContext = React.createContext();
export class DataProvider extends Component {


    state = {
        products:[
            {
               "_id": "1",
                "title": "ANALGIN",
                "src": "https://i.pinimg.com/564x/77/50/50/7750509172d47c061ab8754e0ca4e716.jpg",
                "description": "Analgin (metamizole sodium) has analgesic, antipyretic and anti-inflammatory effects. The analgesic effect is due to the inhibition of COX and blocking the synthesis of prostaglandins from arachidonic acid, which are involved in the formation of pain reactions (bradykinins, prostaglandins, etc.); slowing down the conduction of extra- and proprioceptive pain impulses in the central nervous system, increasing the threshold of excitability of the thalamic centers of pain sensitivity and reducing the response of brain structures responsible for the perception of pain to external stimuli.",
                "country": "Ukraine",
                "price": 25,
                "count": 1

            },
            {
                "_id": "2",
                "title": "PARACETAMOL",
                "src": "https://i.etsystatic.com/7866579/r/il/a9a7f2/694601383/il_570xN.694601383_r7w6.jpg",
                "description": "Inhibits GHG synthesis and reduces the excitability of the thermoregulatory center of the hypothalamus. Rapidly absorbed from the gastrointestinal tract, binds to plasma proteins. T 1/2 from plasma 1-4 hours Metabolized in the liver with the formation of glucuronide and paracetamol sulfate. Excreted by the kidneys mainly as conjugation products, less than 5% is excreted unchanged.",
                "country": "India",
                "price": 34,
                "count": 2

            },
            {
                "_id": "3",
                "title": "NOSHPA",
                "src": "https://usatsneakhype.files.wordpress.com/2014/12/glitter-pills-1.jpg?w=1000",
                "description": "Drotaverine is used both independently and as part of complex therapy for spasms of smooth muscles of the digestive system, biliary tract, urinary system (including urolithiasis), dysmenorrhea, at risk of miscarriage and premature birth, cervical spasm, at postpartum contractions, at spasms of peripheral arteries, at spasms of vessels of a brain, and also when carrying out instrumental researches.",
                "country": "Ukraine",
                "price": 46,
                "count": 3

            },
            {
                "_id": "4",
                "title": "LINEX",
                "src": "https://i.pinimg.com/originals/1c/7b/69/1c7b698a23d7273432210b0b66ed9117.jpg",
                "description": "Combined preparation containing 3 different types of lyophilized viable lactic acid bacteria from different parts of the intestine, which are part of the normal intestinal flora, maintain and regulate the physiological balance of the intestinal microflora.",
                "country": "USA",
                "price": 32,
                "count": 4

            },
            {
                "_id": "5",
                "title": "DIMEDROL",
                "src": "https://i.etsystatic.com/6102761/r/il/d98d6a/1130687863/il_570xN.1130687863_rfgi.jpg",
                "description": "Diphenhydramine is an antihistamine that blocks H1 receptors. Relieves smooth muscle spasm, reduces capillary permeability, prevents and alleviates allergic reactions, has local anesthetic, antiemetic, sedative effects, moderately blocks the cholinergic receptors of the autonomic ganglia, has a hypnotic effect.",
                "country": "Ukraine",
                "price": 18,
                "count": 5

            },
            {
                "_id": "6",
                "title": "MAGNESIA",
                "src": "https://s.yimg.com/ny/api/res/1.2/WcpYho39VlP1eM_2kI7zLQ--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://s.yimg.com/cd/resizer/2.0/original/zM1utJg83clQdi1f69bbYJv0pMU",
                "description": "When taken orally has a choleretic (reflex effect on the receptors of the duodenal mucosa) and a laxative effect (due to poor absorption of magnesium sulfate in the intestine, it creates a high osmotic pressure, there is an accumulation of water in the intestine, the contents of the intestine dissolve). . Is an antidote for poisoning by salts of heavy metals. The beginning of the effect - after 0.5-3 hours, duration - 4-6 hours",
                "country": "USA",
                "price": 30,
                "count": 6

            }
        ],
        cart: [],
        total: 0
    };

    addCart =(id) =>{
       const {products, cart} = this.state;
       const check = cart.every(item=>{
           return item._id !== id
       })
       if(check){
       const data = products.filter(product =>{
           return product._id === id       
           }) 
           this.setState({cart:[...cart, ...data]})
        }else{
            alert("The product has been added to cart!")
        }
    };

    reduction = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count =1 : item.count -=1;
            }
        })
        this.setState({cart:cart});
        this.getTotal();
    };

    increase = id=>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count +=1;
            }
        })
        this.setState({cart:cart});
        this.getTotal();
    
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
        const {cart} = this.state;
        cart.forEach((item,index)=>{
            if(item._id === id){
                cart.splice(index, 1)
            
            }
        })
        this.setState({cart:cart});
        this.getTotal();
    
    }
    };

    getTotal = () =>{
        const {cart} = this.state;
        const res = cart.reduce((prev, item) =>{
            return prev + (item.price * item.count);
        },0)
        this.setState({total:res});
    }

    searchProduct ={
        search: ""
    }

    onchange = e =>{
        this.setState({search : e.target.value })
    }

    render() {
        const {products, cart, total} = this.state;
        const {addCart, reduction,increase,removeProduct, getTotal } = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart,reduction,increase,removeProduct,total,getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


