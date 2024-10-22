/*Zadanie 1: Stwórz zmienną cena i przypisz jej dowolną wartość liczbową. Następnie stwórz drugą
zmienną podatek i przypisz jej wartość 23. Oblicz całkowitą cenę (cena + cena * podatek / 100) i
wyświetl wynik w konsoli.*/


let cena = 10;
let podatek = 23;
console.log(cena + cena * podatek / 100);


/*Zadanie 2: Stwórz zmienną nazwa i przypisz jej dowolny tekst. Użyj operatora typeof, aby wyświetlić
typ tej zmiennej w konsoli.*/


let nazwa = "tekst";
console.log(typeof nazwa);


/*Zadanie 3: Stwórz dwie zmienne a i b o wartościach liczbowych. Użyj operatorów porównania, aby
sprawdzić, czy a jest większe od b i wyświetl wynik w konsoli.
Zadania*/


let a = 34;
let b = 43;
console.log(a == b);
console.log(a === b);


/*Zadanie 4: Stwórz funkcję obliczPoleKwadratu, która przyjmuje jeden parametr - długość boku
kwadratu, i zwraca jego pole. Wywołaj tę funkcję z dowolną wartością i wyświetl wynik w konsoli.*/


function obliczPoleKwadratu(bok) {
    console.log(bok * bok);
};
obliczPoleKwadratu (5);



/*Zadanie 5: Napisz funkcję sprawdzLiczbe, która przyjmuje liczbę jako parametr. Funkcja powinna
zwrócić "Liczba jest parzysta", jeśli liczba jest parzysta, oraz "Liczba jest nieparzysta" w przeciwnym
wypadku.*/


function sprawdzLiczbe(c){
    if(c % 2 == 0)
        console.log("liczba jest parzysta")
    else{
        console.log("liczba nie jest parzysta")
    }
}
    console.log(sprawdzLiczbe(5))


/*Zadanie 6: Napisz funkcję strzałkową powitanie, która przyjmuje imię jako parametr i zwraca tekst
"Witaj, [imię]!". Wywołaj tę funkcję i wyświetl wynik w konsoli.*/


const powitanie = (imie) => "Witaj" + imie + "!";
    console.log("Witaj, Ania")


/*Zadanie 7: Stwórz funkcję obliczCenaBrutto, która przyjmuje cenę netto i podatek VAT jako parametry,
a następnie zwraca cenę brutto (cena netto + VAT). Wywołaj tę funkcję z ceną netto 100 i VAT 23%.*/


function obliczCenaBrutto(cena_netto, podatek_vat){
    console.log(cena_netto + cena_netto * 0.23)
}
obliczCenaBrutto(45)


/*Zadanie 8: Stwórz funkcję sprawdzWiek, która przyjmuje wiek użytkownika jako parametr i używa
operatora ternary, aby zwrócić "Pełnoletni", jeśli użytkownik ma 18 lub więcej lat, oraz "Niepełnoletni" w
przeciwnym razie.*/


function sprawdzWiek (wiek){
    
    let status = (wiek >= 18) ? "Pełnoletni" : "Niepełnoletni";
    console.log(status); 
}
console.log(sprawdzWiek(5))


/*Zadanie 9: Napisz instrukcję switch, która na podstawie zmiennej dzien (przyjmującej wartości od 1 do
7) wyświetla nazwę dnia tygodnia. Jeśli wartość zmiennej nie mieści się w zakresie 1-7, wyświetl
komunikat "Nieznany dzień".*/


let dzien = 4;
switch (dzien) {
 case 1:
 console.log("Poniedziałek");
 break;
 case 2:
 console.log("Wtorek");
 break;
 case 3:
 console.log("Środa");
 break;
 case 4:
 console.log("czwartek");
 break;
 case 5:
 console.log("piatek");
 break;
 case 6:
 console.log("sobota");
 break;
 case 7:
 console.log("niedziela");
 break;
 default:
 console.log("Nieznany dzień");
}


/*Zadanie 10: Stwórz funkcję ocenaUcznia która przyjmuje ocenę (liczba od 1 do 6) i używa instrukcji ifelse do wyświetlenia odpowiedniego komunikatu: "Niedostateczny", "Dostateczny", "Dobry", "Bardzo
dobry" itp. Użyj switch jako alternatywnego rozwiązania.*/


switch (ocenaUcznia){
    case 1:
        console.lob("Niedopuszczający")
        break;
    case 2:
        console.lob("Dopuszczający")
        break;
    case 3:
        console.lob("Dostateczny")
        break;
    case 4:
        console.lob("dobry")
        break;
    case 5:
        console.lob("Bardzo dobry")
        break;
    case 6:
        console.lob("Celujący")
        break;
        
        
}


/*co to kolkatynacja*/



/*function zmianaKoloru(){
    document.getElementById("przycisk1").style.color= "violet";
}
function zmianaKoloru2(){
    let violet = "#3243bb"
    document.getElementById("przycisk2").style.color= violet;
}
function zmianaKoloru3(kolor){
    document.getElementById("przycisk3").style.color= kolor;
}*/
function zmianaKoloru(){
    document.getElementById("przycisk1").style.backgroundColor= "violet";
    document.getElementById("przycisk1").style.color= "white";
    document.getElementById("przycisk1").style.borderColor= "pink";


}
function zmianaKoloru2(){
    let violet = "#3243bb"
    document.getElementById("przycisk2").style.backgroundColor= violet;
}
function zmianaKoloru3(kolor){
    document.getElementById("przycisk3").style.backgroundColor= kolor;
}
