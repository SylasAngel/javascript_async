class Vendor{
    #itemList

    #noItemCallback

    #itemCallback

    set noItemCallback(value){
        this.#noItemCallback = value
    }

    set ItemCallback(value){
        this.#itemCallback = value
    }

    constructor(itemList){
        this.#itemList = itemList
    }

    sellSomething(){
        if(this.#itemList.length === 0){
            this.#noItemCallback('Nincs eladni való termék')
        }else{
            this.#itemCallback(this.#itemList.pop())
        }
    }

    sellSomethingPromise(){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
        if(this.#itemList.length === 0){
            reject('Nincs eladni való termék')
        }else{
            resolve(this.#itemList.pop())
            }
            },1000)
        })
    }
}

class Client{
    /**
     * @type {Vendor}
     */
    #vendor

    constructor(vendor){
        this.#vendor = vendor
        this.#vendor.ItemCallback = (element) => {
            console.log(`A kliens vett egy ${element}`)
        }
        this.#vendor.noItemCallback = (reason) =>{
            console.log(`A kliens nem vett semmit mert: ${reason}`)
        }
    }

    buyFromSeller(){
        this.#vendor.sellSomething()
    }

    buyFromSellerPromiseHandling(){
        this.#vendor.sellSomethingPromise()
        .then((element) =>{
            console.log(`A kliens vett egy ${element}`)
        })
        .catch((reason) => {
            console.log(`A kliens nem vett semmit mert: ${reason}`)
        }).finally(() =>{
            console.log('Vásároltunk')
        })
    }
}

const vendor = new Vendor(['krumpl'])
const client = new Client(vendor)
// client.buyFromSeller()
client.buyFromSellerPromiseHandling()
client.buyFromSellerPromiseHandling()