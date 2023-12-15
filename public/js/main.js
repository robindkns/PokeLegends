// function playOpening(){
//     let audioOpening = document.querySelector("audio")
//     audioOpening.volume = 0.4
//     audioOpening.play()
// }


let btnPlay = document.getElementById('play')
let divHome = document.querySelector(".title")
let divInfosJinx = document.querySelector(".infoJinx")
let divInfosVeigar = document.querySelector(".infoVeigar")
let divCharacter = document.querySelector(".characters")
let jinx = document.querySelector(".jinx")
let veigar = document.querySelector(".veigar")
let attackBox = document.querySelector(".attackBox")
let attack = document.querySelector(".attack")
let tirAuto = document.getElementById('tirAuto')
let zap = document.getElementById('zap')
let canon = document.getElementById('canon')
let roquette = document.getElementById('roquette')
let imgJinx = document.getElementById('imgJinx')
let imgVeigar = document.getElementById('imgVeigar')
let lifebarVeigar = document.getElementById("lifebarVeigar")
let lifebarJinx = document.getElementById("lifebarJinx")
let audioCombat = new Audio("./public/img/combat.mp3")
let audioWin2 = new Audio("./public/img/victory18s.mp3")
let audioWin1 = new Audio("./public/img/victory1.mp3")
let audioOpening = document.querySelector("audio")
audioOpening.volume = 0.2
let audioHit = new Audio("./public/img/hitNormal.mp3")
audioHit.volume = 0.5
let veigarPV = 100
let jinxPV = 100
let tirAutoPA = 10
let zapPA = 20
let canonPA = 15
let roquettePA = 30
let lock = false
let jinxPVHtml = document.getElementById("pvJinx")
let veigarPVHtml = document.getElementById("pvVeigar")
let blocAttacks = document.querySelector(".attacks")
let textVictoire = document.createElement("p")
let btnReplay = document.createElement("button")


btnPlay.addEventListener('click', () => {

    audioCombat.volume = 0.2
    audioCombat.autoplay = true
    audioCombat.loop = true
    audioCombat.play()
    audioOpening.pause()
    divHome.style = "animation : titleDropUp 1.5s ease-in-out forwards;"
    divInfosJinx.style = "margin-left : 5%; transition : 1.5s;"
    divInfosVeigar.style = "margin-right : 5%; transition : 1.5s;"

    setInterval(() => {
        jinx.style = "translate : 0% 0%; transition : 1.5s ease-out;"
        veigar.style = "translate : 0% 0%; transition : 1.5s ease-out;"
    }, 1000);

    setInterval(() => {
        attackBox.style = "margin-top : -1%; transition : 1.5s ease-out;"
    }, 2000);
    
})

tirAuto.addEventListener('click', () => {
    if (lock == true) {
        return
    } else {
        attaqueJinx(tirAuto)
    }
})
zap.addEventListener('click', () => {
    if (lock == true) {
        return
    } else {
        attaqueJinx(zap)
    }
})
canon.addEventListener('click', () => {
    if (lock == true) {
        return
    } else {
        attaqueJinx(canon)
    }
})
roquette.addEventListener('click', () => {
    if (lock == true) {
        return
    } else {
        attaqueJinx(roquette)
    }
})


function attaqueJinx(attack) {

    if (attack.id == "tirAuto") {

        lock = true
        veigarPV -= tirAutoPA
        imgJinx.src = "./public/img/get_jinxed.gif"

        if (veigarPV <= 50 && veigarPV > 20) {
            lifebarVeigar.style = `width : ${veigarPV}%; background-color : #ce9a22; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        } else if (veigarPV <= 20 && veigarPV > 0) {
            lifebarVeigar.style = `width : ${veigarPV}%; background-color : red; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        } else if (veigarPV <= 0){

            lifebarVeigar.style = `width : 0%; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                veigar.style = "animation : mortVeigar 1.5s forwards;"
            }, 5000);
            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioCombat.pause()
                audioWin1.volume = 0.3
                audioWin2.volume = 0.3
                audioWin1.play()
                setTimeout(() => {
                    audioWin2.play()
                    finCombat("victoire")
                },5000)
                setTimeout(() => {
                    audioOpening.play()
                },18000)
            }, 5300);

        } else {
            lifebarVeigar.style = `width : ${veigarPV}%; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        }
    
        setTimeout(() => {
            imgJinx.src = "./public/img/jinx.gif"
            if (veigarPV < 0) {
                veigarPVHtml.innerHTML = `0PV`
            } else {
                veigarPVHtml.innerHTML = `${veigarPV}PV`
            }
        }, 3000);

    } else if (attack.id == "zap") {

        lock = true
        veigarPV -= zapPA
        imgJinx.src = "./public/img/get_jinxed.gif"
        
        if (veigarPV <= 50 && veigarPV > 20) {
            lifebarVeigar.style = `width : ${veigarPV}%; background-color : #ce9a22; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        } else if (veigarPV <= 20 && veigarPV > 0) {
            lifebarVeigar.style = `width : ${veigarPV}%; background-color : red; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        } else if (veigarPV <= 0){
            
            lifebarVeigar.style = `width : 0%; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                veigar.style = "animation : mortVeigar 1.5s forwards;"
            }, 5000);
            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioCombat.pause()
                audioWin1.volume = 0.3
                audioWin2.volume = 0.3
                audioWin1.play()
                setTimeout(() => {
                    audioWin2.play()
                    finCombat("victoire")
                },5000)
                setTimeout(() => {
                    audioOpening.play()
                },18000)
            }, 5300);

        } else {
            lifebarVeigar.style = `width : ${veigarPV}%; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        }
    
        setTimeout(() => {
            imgJinx.src = "./public/img/jinx.gif"
            if (veigarPV < 0) {
                veigarPVHtml.innerHTML = `0PV`
            } else {
                veigarPVHtml.innerHTML = `${veigarPV}PV`
            }
        }, 3000);

    } else if (attack.id == "canon") {

        lock = true
        veigarPV -= canonPA
        imgJinx.src = "./public/img/get_jinxed.gif"
        
        if (veigarPV <= 50 && veigarPV > 20) {
            lifebarVeigar.style = `width : ${veigarPV}%; background-color : #ce9a22; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        } else if (veigarPV <= 20 && veigarPV > 0) {
            lifebarVeigar.style = `width : ${veigarPV}%; background-color : red; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)
            
            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        } else if (veigarPV <= 0){

            lifebarVeigar.style = `width : 0%; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                veigar.style = "animation : mortVeigar 1.5s forwards;"
            }, 5000);
            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioCombat.pause()
                audioWin1.volume = 0.3
                audioWin2.volume = 0.3
                audioWin1.play()
                setTimeout(() => {
                    audioWin2.play()
                    finCombat("victoire")
                },5000)
                setTimeout(() => {
                    audioOpening.play()
                },18000)
            }, 5300);

        } else {
            lifebarVeigar.style = `width : ${veigarPV}%; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        }
    
        setTimeout(() => {
            imgJinx.src = "./public/img/jinx.gif"
            if (veigarPV < 0) {
                veigarPVHtml.innerHTML = `0PV`
            } else {
                veigarPVHtml.innerHTML = `${veigarPV}PV`
            }
        }, 3000);

    }else if (attack.id == "roquette") {

        lock = true
        imgJinx.src = "./public/img/get_jinxed.gif"
        veigarPV -= roquettePA
        
        if (veigarPV <= 50 && veigarPV > 20) {
            lifebarVeigar.style = `width : ${veigarPV}%; background-color : #ce9a22; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        } else if (veigarPV <= 20 && veigarPV > 0) {
            lifebarVeigar.style = `width : ${veigarPV}%; background-color : red; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        } else if (veigarPV <= 0){
            lifebarVeigar.style = `width : 0%; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                veigar.style = "animation : mortVeigar 1.5s forwards;"
            }, 5000);
            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioCombat.pause()
                audioWin1.volume = 0.3
                audioWin2.volume = 0.3
                audioWin1.play()
                setTimeout(() => {
                    audioWin2.play()
                    finCombat("victoire")
                },5000)
                setTimeout(() => {
                    audioOpening.play()
                },18000)
            }, 5300);
            
        } else {
            lifebarVeigar.style = `width : ${veigarPV}%; transition: 3s`

            setTimeout(() => {
                veigar.removeChild(imgVeigar)
                audioHit.play()
            },300)
            setTimeout(() => {
                veigar.appendChild(imgVeigar)
            },400)

            setTimeout(() => {
                attaqueVeigar()
            }, 5000);
            setTimeout(() => {
                lock = false
            },9000)
        }
    
        setTimeout(() => {
            imgJinx.src = "./public/img/jinx.gif"
            if (veigarPV < 0) {
                veigarPVHtml.innerHTML = `0PV`
            } else {
                veigarPVHtml.innerHTML = `${veigarPV}PV`
            }
        }, 3000);

    }
}

function attaqueVeigar() {
    let attackRandom = Math.floor(Math.random() * 3)

    if (attackRandom == 0) {

        lock = true
        let coupMalin = 10
        jinxPV -= coupMalin
        imgVeigar.src = "./public/img/veigar_evil_laugh.gif"

        if (jinxPV <= 50 && jinxPV > 20) {
            lifebarJinx.style = `width : ${jinxPV}%; background-color : #ce9a22; transition: 3s`

            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        } else if (jinxPV <= 20 && jinxPV > 0) {
            lifebarJinx.style = `width : ${jinxPV}%; background-color : red; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        } else if (jinxPV <= 0){
            lifebarJinx.style = `width : 0%; transition: 3s`

            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                jinx.style = "animation : mortJinx 1.5s forwards;"
            }, 5000);
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioCombat.pause()
                audioWin1.volume = 0.3
                audioWin2.volume = 0.3
                audioWin1.play()
                setTimeout(() => {
                    audioWin2.play()
                    finCombat("victoire")
                },5000)
                setTimeout(() => {
                    audioOpening.play()
                },18000)
            }, 5300);
            

        } else {
            lifebarJinx.style = `width : ${jinxPV}%; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        }

        setTimeout(() => {
            imgVeigar.src = "./public/img/veigar.gif"
            if (jinxPV < 0) {
                jinxPVHtml.innerHTML = `0PV`
            } else {
                jinxPVHtml.innerHTML = `${jinxPV}PV`
            }
        }, 3000);

    } else if (attackRandom == 1) {

        lock = true
        let matiereNoire = 20
        jinxPV -= matiereNoire
        imgVeigar.src = "./public/img/veigar_evil_laugh.gif"

        if (jinxPV <= 50 && jinxPV > 20) {
            lifebarJinx.style = `width : ${jinxPV}%; background-color : #ce9a22; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        } else if (jinxPV <= 20 && jinxPV > 0) {
            lifebarJinx.style = `width : ${jinxPV}%; background-color : red; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        } else if (jinxPV <= 0){
            lifebarJinx.style = `width : 0%; transition: 3s`

            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                jinx.style = "animation : mortJinx 1.5s forwards;"
            }, 5000);
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioCombat.pause()
                audioWin1.volume = 0.3
                audioWin2.volume = 0.3
                audioWin1.play()
                setTimeout(() => {
                    audioWin2.play()
                    finCombat("victoire")
                },5000)
                setTimeout(() => {
                    audioOpening.play()
                },18000)
            }, 5300);

        } else {
            lifebarJinx.style = `width : ${jinxPV}%; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        }

        setTimeout(() => {
            imgVeigar.src = "./public/img/veigar.gif"
            if (jinxPV < 0) {
                jinxPVHtml.innerHTML = `0PV`
            } else {
                jinxPVHtml.innerHTML = `${jinxPV}PV`
            }
        }, 3000);

    } else if (attackRandom == 2) {

        lock = true
        let profanation = 25
        jinxPV -= profanation
        imgVeigar.src = "./public/img/veigar_evil_laugh.gif"

        if (jinxPV <= 50 && jinxPV > 20) {
            lifebarJinx.style = `width : ${jinxPV}%; background-color : #ce9a22; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        } else if (jinxPV <= 20 && jinxPV > 0) {
            lifebarJinx.style = `width : ${jinxPV}%; background-color : red; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        } else if (jinxPV <= 0){
            lifebarJinx.style = `width : 0%; transition: 3s`

            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                jinx.style = "animation : mortJinx 1.5s forwards;"
            }, 5000);
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioCombat.pause()
                audioWin1.volume = 0.3
                audioWin2.volume = 0.3
                audioWin1.play()
                setTimeout(() => {
                    audioWin2.play()
                    finCombat("victoire")
                },5000)
                setTimeout(() => {
                    audioOpening.play()
                },18000)
            }, 5300);

        } else {
            lifebarJinx.style = `width : ${jinxPV}%; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        }

        setTimeout(() => {
            imgVeigar.src = "./public/img/veigar.gif"
            if (jinxPV < 0) {
                jinxPVHtml.innerHTML = `0PV`
            } else {
                jinxPVHtml.innerHTML = `${jinxPV}PV`
            }
        }, 3000);

    } else if (attackRandom == 3) {

        lock = true
        let explosionPrimordiale = 30
        jinxPV -= explosionPrimordiale
        imgVeigar.src = "./public/img/veigar_evil_laugh.gif"

        if (jinxPV <= 50 && jinxPV > 20) {
            lifebarJinx.style = `width : ${jinxPV}%; background-color : #ce9a22; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        } else if (jinxPV <= 20 && jinxPV > 0) {
            lifebarJinx.style = `width : ${jinxPV}%; background-color : red; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        } else if (jinxPV <= 0){
            lifebarJinx.style = `width : 0%; transition: 3s`

            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                jinx.style = "animation : mortJinx 1.5s forwards;"
            }, 5000);
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioCombat.pause()
                audioWin1.volume = 0.3
                audioWin2.volume = 0.3
                audioWin1.play()
                setTimeout(() => {
                    audioWin2.play()
                    finCombat("victoire")
                },5000)
                setTimeout(() => {
                    audioOpening.play()
                },18000)
            }, 5300);

        } else {
            lifebarJinx.style = `width : ${jinxPV}%; transition: 3s`
            
            setTimeout(() => {
                jinx.removeChild(imgJinx)
                audioHit.play()
            },300)
            setTimeout(() => {
                jinx.appendChild(imgJinx)
            },400)

            setTimeout(() => {
                lock = false
            },6000)
        }
        
        

        setTimeout(() => {
            imgVeigar.src = "./public/img/veigar.gif"
            if (jinxPV < 0) {
                jinxPVHtml.innerHTML = `0PV`
            } else {
                jinxPVHtml.innerHTML = `${jinxPV}PV`
            }
        }, 3000);

    }
}

function finCombat(issue) {
    blocAttacks.style = "margin-top : 30%; transition: 1.5s"

    if (issue == "victoire") {
        setTimeout(() => {
            blocAttacks.removeChild(tirAuto)
            blocAttacks.removeChild(zap)
            blocAttacks.removeChild(canon)
            blocAttacks.removeChild(roquette)
            
            btnReplay.innerHTML = "REJOUER"
            btnReplay.id = "rejouer"
            textVictoire.innerHTML = "VICTOIRE !"
            blocAttacks.appendChild(textVictoire)
            blocAttacks.appendChild(btnReplay)
            blocAttacks.style = "margin-top : -1%; transition: 1.5s"
            blocAttacks.style = "grid-template-columns: auto"
            btnReplay.addEventListener("click", () => {
                playAgain()
            })
        },1500)
    } else {
        setTimeout(() => {
            blocAttacks.removeChild(tirAuto)
            blocAttacks.removeChild(zap)
            blocAttacks.removeChild(canon)
            blocAttacks.removeChild(roquette)
            btnReplay.innerHTML = "REJOUER"
            btnReplay.id = "rejouer"
            textVictoire.innerHTML = "DÉFAITE ! GROS NUL"
            blocAttacks.appendChild(textVictoire)
            blocAttacks.appendChild(btnReplay)
            blocAttacks.style = "margin-top : -1%; transition: 1.5s"
            blocAttacks.style = "grid-template-columns: auto"
            btnReplay.addEventListener("click", () => {
                playAgain()
            })
        },1500)
    }
    
}

function playAgain() {
    window.location.reload()
}