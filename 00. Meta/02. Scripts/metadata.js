class metadata {
    // Trova la moc che punta al file corrente
    // Interseca l'insieme delle mocs con l'insieme degli inlink al file corrente
    getMOCs(dv) { 
        const concept = "#concept"
        const moc = "#moc"
        const domain = "#domain"
        let inlinks = dv.current().file.inlinks
        let mocs = dv.pages(moc).file.link
        let intersection = mocs.filter(e => inlinks.includes(e))
        this.display(intersection, "MOCS", dv)
    }
    // interseca l'insieme dei file in elaborazione con l'insieme degli inlinks alla pagina corrente
    // viene utilizzato nelle pagine #materia
    getElab(dv) {
        var data_elab = dv.pages("#status/elaborazione AND #concept OR #moc")
        var domainSpaces = data_elab.domain
        var uniqueDomains = domainSpaces.filter((item, i) => domainSpaces.indexOf(item) === i)
        for (let i = 0; i < uniqueDomains.length; i++) {
            var elab_pages = data_elab.where( p => p.file.outlinks.includes(uniqueDomains[i]) ).sort( k => k.file.ctime, 'asc').file.link
            this.display(elab_pages, uniqueDomains[i], dv)
        }
    }
    // interseca l'insieme dei file in ricerca con l'insieme degli inlinks alla pagina corrente
    // viene utilizzato nelle pagine #materia
    getRic(dv) {
        let inlinks = dv.current().file.inlinks
        let data_ric = dv.pages("#status/ricerca")
        let intersection_ric = inlinks.filter(e => data_ric.file.link.includes(e))
        this.display(intersection_ric, "Ricerca", dv)
    }
    // funzione per mostrare in modo uniforme le informazioni
    // viene utilizzato all'interno delle altre funzioni
    display(arr, type, dv) {
        if (type == "MOCS") {
            if (arr.length > 0) {
                dv.span("###### " + type)
                dv.list(arr)
            } else {
                dv.span("###### " + type)
                dv.el("ul","<li>" + "L'elemento non è contenuto in nessuna " + type.toLowerCase() + "</li>")
            }
        } else {
            if (arr.length > 0) {
                dv.span("###### " + type)
                dv.list(arr)
            } else {
                dv.span("###### " + type)
                dv.el("ul","<li>Nessun elemento in " + type + "</li>")
            }
        }
    }
    randomReflections(dv){
        let reflections = ["Cosa ti ha sorpreso oggi? Perché?",
        "Qual è la cosa più importante che hai appreso oggi? Perché lo credi?",
        "Cosa ti piacerebbe approfondire? Perché?",
        "Quando sei stato più creativo? Per quali ragioni credi di esserlo stato?",
        "Cosa ti ha incuriosito oggi? Come credi che la curiosità influisca sul tuo modo di imparare?",
        "Quando sei stato al tuo meglio oggi? Perché?",
        "Assumendo che continuerai a studiare lo stesso argomento, da dove riprenderai lo studio? Perché?",
        "Cosa puoi o potresti fare con ciò che hai imparato?",
        "Stai utilizzando il tuo tempo in modo saggio?",
        "Stai dando qualcosa per scontato?",
        "Hai una sana prospettiva sul problema?",
        "Stai vivendo con sincerità nei tuoi riguardi?",
        "Ti sei svegliato la mattina pronto a conquistare la giornata?",
        "Hai pensieri cupi o negativi prima di addormentarti?",
        "Stai mettendo sufficiente impegno nelle relazioni?",
        "Ti stai prendendo cura della tua salute fisica?",
        "Ti stai lasciando influenzare da cose fuori dal tuo controllo?",
        "Stai raggiungendo gli obiettivi prefissati?"]
        let randomIndex = Math.floor(Math.random() * reflections.length)
        let reflectionsNum = 3

    }
}
 