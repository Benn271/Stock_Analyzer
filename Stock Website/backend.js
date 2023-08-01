let bullbear = () => {
    let currentP = document.getElementById('currentprice').value;
    let avP = document.getElementById('historicalaverage').value;
    let iv = document.getElementById('impliedvolatility').value;
    let hv = document.getElementById('historicalvolatility').value;


    let currentp = parseFloat(currentP);
    let iV = parseFloat(iv);
    let hV = parseFloat(hv);
    let aVp = parseFloat(avP);

    avp = (aVp * 0.75);
    if(currentp <= avp && iV <= hV){
        //bullish
        location.href='bullish.html';
    }else if(currentp > avp || iV > hV){
        //bearish
        location.href='bearish.html';
    }else{
        //Documentation
        location.href='documentation.html';
    }
}
