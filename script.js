let hayırsayısı = 0;

function evet() {
    const gifElement = document.getElementById("gif");
    const textElement = document.getElementById("text");
    textElement.innerHTML = "SENİ ÇOK SEVİYORUM";
    gifElement.src = "evet.gif";
    gifElement.style.setProperty("display", "block", "important");
    document.getElementById("evet").style.setProperty("display", "none", "important");
    document.getElementById("hayır").style.setProperty("display", "none", "important");
    gifElement.classList.add("evetdendi");
    if (textElement) {
        textElement.classList.add("evetdendi");
    }
}

function hayır() {
    hayırsayısı++;    
    const textElement = document.getElementById("text");
    const gifElement = document.getElementById("gif");
    const evetButon = document.getElementById("evet");
    const hayırButon = document.getElementById("hayır"); 
    if (hayırsayısı === 1) {
        textElement.innerHTML = "Kabul Edersen Çok Mutlu Olurum";
        gifElement.src = "mutlu.gif";
    } 
    else if (hayırsayısı === 2) {
        textElement.innerHTML = "Sana Hep Çiçek Alırım";
        gifElement.src = "cicek.gif";
    }
    else if (hayırsayısı === 3) {
        textElement.innerHTML = "Seni Sık Sık Öperim";
        gifElement.src = "opme.gif";
        evetButon.style.setProperty("font-size", "45px", "important");
        evetButon.style.setProperty("padding", "25px 50px", "important");
        evetButon.style.setProperty("max-width", "450px", "important");               
        hayırButon.style.setProperty("font-size", "18px", "important");
        hayırButon.style.setProperty("padding", "10px 20px", "important");
        hayırButon.style.setProperty("max-width", "150px", "important");
        hayırButon.style.setProperty("min-width", "80px", "important");
    }
    else if (hayırsayısı === 4) {
        textElement.innerHTML = "Kabul Etmezsen Çok Üzülürüm";
        gifElement.src = "aglama.gif";
        evetButon.style.setProperty("font-size", "65px", "important");
        evetButon.style.setProperty("padding", "35px 70px", "important");
        evetButon.style.setProperty("max-width", "650px", "important");   
        hayırButon.style.setProperty("font-size", "12px", "important");
        hayırButon.style.setProperty("padding", "6px 12px", "important");
        hayırButon.style.setProperty("max-width", "100px", "important");
        hayırButon.style.setProperty("min-width", "50px", "important");
    }
    else if (hayırsayısı >= 5) {
        textElement.innerHTML = "Lütfen Kabul Et";       
        gifElement.style.setProperty("display", "none", "important");
        hayırButon.style.setProperty("display", "none", "important");
        evetButon.style.setProperty("font-size", "90px", "important");
        evetButon.style.setProperty("width", "95%", "important");
        evetButon.style.setProperty("max-width", "100%", "important");
        evetButon.style.setProperty("height", "70dvh", "important");
    }
}