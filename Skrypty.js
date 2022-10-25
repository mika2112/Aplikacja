//tu beda skrypty do programu 

function test()
{
let liczba1 = document.getElementById("wyszukiwarka").value;
if (liczba1==2)
{
    document.getElementById("wynik").innerHTML = "wpisałeś 2";
} else {
    document.getElementById("wynik").innerHTML = "wpisałeś coś innego niż 2";
}

}