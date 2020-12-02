import React from "react"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"

const AboutMeSection = () => {
  return (
    <Wrapper padding="0" bg="light">
      <ContentWrapper direction="column" padding="78px 219px 140px 102px">
        <CapitalizeText margin="0 0 0 5px">Bottega</CapitalizeText>
        <Line width="50%" />
        <Paragraph margin="0 41px 0 0px">
          Italia sama mnie wybrała.
          <br />
          Zaczęła od makaronu, wiadomo - przez żołądek trafia się do serca.
          Najwidoczniej zawarła z Mamą jakiś tajny pakt, bo włoska pasta w moim
          rodzinnym domu obecna była zawsze.
          <br />I bazylia.
        </Paragraph>
        <div style={{ margin: "0 auto", maxWidth: "730px" }}>
          <Paragraph
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
            margin="45px 0 0"
          >
            Ale Italia potrafiła zarzucać sieci nie tylko bazyliowe. Regularnie,
            gdy nie patrzyłam, podrzucała w domu grube, wielce intrygujące
            italskie księgi traktujące o sztuce i architekturze. Ukratkiem
            zapełniała półki opasłymi albumami mistrzów włoskiego Renesansu, i
            jak gdyby nigdy nic, rozwieszała na ścianach reprodukcje ich dzieł.
            - Mam dla ciebie “Piękną Ogrodniczkę” Rafaela. - mówiła bezgłośnie,
            nie spuszczając ze mnie oka. - Jak ci się podoba? (A mnie podobała
            się ramka.) No tak, wolisz “Damę z Łasiczką”... Trzeba było tak od
            razu mówić! - i westchnąwszy - Beh, se vuoi… - wieszała dzieło
            Leonarda. O tym, że zawiesiła akurat Leonarda czy Rafaela,
            dowiadywałam się od Mamy, ale zbytnio się tym nie przejmowałam -
            przecież ONI byli tu od zawsze! Podobnie nieszczególnie przejmowałam
            się - jeszcze wtedy - pełnymi harmonii rysunkami Witruwiusza czy
            Palladia, które uważałam za oczywistą oczywistość, składającą się na
            należące do Ojca, grubaśne księgi o architekturze. Ja się nie
            przejmowałam, ale Ona, Italia, cierpliwie czekała. Aż pewnego dnia
            uznała, że nadszedł TEN właściwy moment. Wiedziała co robi, gdy na
            pierwszy ogień posłała swą najbardziej uwodzicielską postać,
            Wenecję. - Popatrz - rzekła, rzucając niepostrzeżenie Urok
            Ostateczny - to jest Plac Świętego Marka i Pałac Dożów, a wszystko
            brodzi po kostki w morzu. Tak brzmiało zaklęcie. I wtedy Gen Italski
            uaktywnił mi się na dobre, zwłaszcza że widokom tramwajów wodnych,
            Ponte Rialto czy Ponte dei Sospiri towarzyszyły gustowne, dziewczęce
            włoskie ogrodniczki z jasnego dżinsu, które stały się moją drugą
            skórą - aż do chwili, gdy z nich wyrosłam (tylko Włosi potrafią
            wymyślać takie ciuchy!). No cóż, trzeba żyć w zgodzie z
            przeznaczeniem. Dlatego na piętnaste urodziny kupiłam sobie rozmówki
            polsko-włoskie i wraz z pierwszym włoskim zdaniem w moim życiu:
            “Abito a Roma”/Mieszkam w Rzymie - wzięłam kurs na Rzym. W Rzymie
            niestety nie mieszkam (błąd!), ale mimo to sądzę, że wszystkie drogi
            i tak w końcu prowadzą do Rzymu. Jednak
            każda-z-tych-dróg-do-Wiecznego-Miasta wiedzie przez wiele innych
            miejsc w Italii. Ale o tym już chyba wszyscy zdołaliśmy się
            przekonać. A jeśli nie, to tylko kwestia czasu. Dlatego wszelkie
            treści, na które tu się natkniecie, będą poświęcone całej Italii:
            jej wyrazistemu językowi, urokowi jej stylu życia i tworzenia, oraz
            jej niepowtarzalnemu pięknu. Czyli wszystkiemu temu, czemu nie może
            oprzeć się nasz fantastyczny Italski Gen - a sądzę, że ma go każdy z
            nas. Liczę, że studia filologiczne, filozoficzne i architektoniczne,
            na które zaprowadziła mnie towarzysząca mi zawsze i wszędzie Italia,
            i które złożyły mi się pięknie w jedną całość - a widzę to dopiero z
            perspektywy czasu - pomogą mi stworzyć tu prawdziwą oazę dla
            wszystkich obdarzonych Italskim Genem.
          </Paragraph>
        </div>
      </ContentWrapper>
    </Wrapper>
  )
}

export default AboutMeSection
