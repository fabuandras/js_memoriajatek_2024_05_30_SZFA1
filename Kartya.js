export default class Kartya {
    /*
    megejeleníti a képet,
    és ha a képre kattintunk, akkor megfordul,
    vissza is tud fordulni,
    el is tud rejtőzni
    */

    #kep="";
    #allapot=true; //true - látható a kép . false - a háttér látható
    #szuloElem;
    #kepElem;
    #kattinthato=true;
    constructor(kep, szuloElem){
        this.#kep=kep;
        this.#szuloElem=szuloElem;
        this.#allapot=false;
        this.#megjelenit()
        this.#kepElem=this.#szuloElem.children("div:last-child").children("img")
        console.log(this.#kepElem)
        this.#kepElem.on("click",() => {
            this.setAllapot(true)
            this.#trigger("kapcsol")
        })
    }

    #trigger(esemenynev){
        const e= new CustomEvent(esemenynev, {detail: this.#kep})
        window.dispatchEvent(e)

    }

    #megjelenit(){
        let txt= `
            <div class="card col-sm-3">
                <img src="kepek/hatter.jpg" alt="memóriajáték kiskép">
            </div>
        `
        this.#szuloElem.append(txt)
    }

    setAllapot(ertek){
        if  (ertek == true || ertek == false) {
            this.#allapot = ertek
            this.#felfordit()

        }
    }
    #felfordit(){
        /*
        állapottól függően vagy a háttérképet,
        vagy a képet tölti be az src-jébe.
        */
        /*
        akkor hívódik meg, ha rákattintunk a képre
        */

        if (this.#allapot) {
            this.#kepElem.attr("src", this.#kep)
        }else{
            this.#kepElem.attr("src", "kepek/hatter.jpg")
        }
    }
}