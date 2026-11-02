# Requiem dla Andrzeja Siewińskiego — strona

Gotowa strona statyczna: HTML, CSS i JavaScript, bez frameworków, instalacji i kompilowania. Wszystkie zasoby są lokalne, bez zewnętrznych fontów i bibliotek.

## Rozmieszczenie plików

Skopiuj zawartość tego katalogu do katalogu głównego repozytorium (index.html ma leżeć bezpośrednio w katalogu publikowanym przez GitHub Pages).

| Ścieżka | Zawartość |
| --- | --- |
| index.html | Tekst, tabela i wszystkie odnośniki do nut |
| main.css | Wygląd, układ mobilny, animacja tła |
| main.js | Okno plakatu i parametr ?poster |
| assets/pogrzeb.jpg | Dostarczony obraz — tło nagłówka |
| assets/plakat.jpg | Podgląd plakatu wygenerowany z PDF |
| assets/plakat.pdf | Dostarczony oryginalny plakat PDF |
| nuty/ | Tu umieść wszystkie 22 PDF-y nut |

Grafiki i plakat są już dołączone. Nuty NIE są dołączone: przed publikacją dodaj własne PDF-y do folderu nuty. Pełna lista oczekiwanych nazw jest w nuty/UMIESC-TUTAJ-PDF.txt. Ten plik instrukcji można potem usunąć.

Zachowaj dokładne nazwy: partytury zaczynają się od siewinski-, głosy od siwinski-. Zachowano też pisownię purerpera w nazwach plików, choć w wyświetlanym tytule jest puerpera. Nie zmieniaj nazw bez aktualizacji href w index.html. Wielkość liter ma znaczenie.

Wszystkie ścieżki są względne, dlatego strona może działać w podkatalogu repozytorium GitHub Pages. Repozytorium musi mieć włączoną publikację Pages ze wskazanego katalogu; samo przesłanie plików do repozytorium nie uruchamia strony.

## Plakat

Dopisz ?poster do adresu opublikowanej strony (po końcowym ukośniku). Plakat otworzy się automatycznie. Parametr może współistnieć z innymi parametrami i kotwicami. Okno zamyka przycisk, Escape lub kliknięcie poza plakatem. Bez JavaScript miniatura otwiera bezpośrednio obraz plakatu.

Przy wymianie plakatu podmień oba pliki: assets/plakat.pdf oraz assets/plakat.jpg. Podmiana samego PDF nie aktualizuje podglądu JPG.

## Edycja

Teksty i odnośniki zmienia się w index.html. Tabela pozostaje dostępna także bez JavaScript. Pobieranie wykorzystuje atrybut download; ostateczne zachowanie zależy od ustawień przeglądarki.

Kolory są na początku main.css w :root. Ruch tła to animacja drift, wykonywana tylko w CSS. Aby ją wyłączyć, ustaw animation: none w .hero-art. Dla preferencji systemowej ograniczenia ruchu animacja jest już automatycznie wyłączona.

Na telefonie opis i plakat ustawiają się jeden pod drugim, a tabelę można przewijać poziomo, zachowując trzy kolumny. Skróty: PART. — partytura, Ob — obój, Vn — skrzypce, BC — basso continuo.

## Sprawdzenie

Sprawdzono składnię JavaScript, liczbę i unikalność 22 odnośników do nut oraz podgląd komputerowy w przeglądarce. Przetestowano otwieranie plakatu kliknięciem, bezpośrednim ?poster i zamykanie Escape. Pobierania nut nie można sprawdzić przed dodaniem właściwych PDF-ów. Nie publikowano strony w repozytorium użytkownika.
