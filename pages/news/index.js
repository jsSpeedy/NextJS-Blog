import styled from "styled-components";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

const newsContents = [
  {
    href: "haber-1",
    title: "Koruma Biyolojisi Nedir?",
    src: "https://cdn.evrimagaci.org/WVC0ZN7uuUTgnD_kx7qbv77rjrc=/825x0/filters:format(webp)/storage.evrimagaci.org%2Fcontent%2F2fea3ff6-5d1e-4d1e-bd93-3b1b14ea718b.jpeg",
    content:
      "Günümüzde gerçekleşen habitat kayıpları biyoçeşitliliğin hızla azalmasına neden olmaktadır. Nesli tükenmekte olan türler; iklim değişikliği, avlanma, kirlilik ve habitat kaybı gibi birçok faktöre maruz kalarak dünya üzerindeki varlıklarını devam ettirmeye çalışmaktadır. Özellikle de yaşanan habitat kayıpları birçok türün neslinin tükenme tehlikesi altına girmesinin başlıca nedenlerinden biridir. Bu durum, türlerin göç yollarını keserek ve nüfuslarını azaltarak onları olumsuz etkilemektedir. Bu sorunların ortaya çıkmasındaysa insan etkisi önemli bir yer tutmaktadır. Hızla artan nüfus ve talepler, doğal kaynakların aşırı kullanımına ve ekosistemlerde daha fazla baskıya neden olmaktadır.",
  },
  {
    href: "haber-2",
    title: "Zaman Evrenin Dışında mı İçinde mi?",
    src: "https://cdn.evrimagaci.org/r-AaKtaH7NLfnG-Vl_HUPWoVzx8=/618x0/evrimagaci.org%2Fpublic%2Fqna_media%2F62b85b8de3c8d42a56fcd98ff606c1f3.jpeg",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae, officia odio nulla ratione consequuntur dignissimos alias non ab asperiores unde officiis tempore qui quidem quia numquam facere consectetur quibusdam at. Totam fuga veniam officiis fugiat numquam sequi reprehenderit facere distinctio corrupti sit cum, possimus, rem eveniet rerum, vitae libero.`,
  },
];

const NewsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
`;

const Cards = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  background-color: #c9d6df;
  color: #2c3333;
`;

const CardsContent = styled.div`
  padding: 1rem;
`;

const H2 = styled.h2`
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default () => (
  <Layout title="Haberler">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas
    commodi possimus ratione recusandae nemo ullam officia reprehenderit!
    Molestiae omnis odio ipsam impedit eius ipsa quas praesentium quod quo
    inventore?
    <NewsWrapper>
      {newsContents.map(({ title, content, href, src }, index) => (
        <Cards key={index}>
          <Img src={src} alt="" />
          <CardsContent>
            <H2>{title}</H2>
            <p>{content}</p>
            <Button href={`news/${href}`}>Devamı</Button>
          </CardsContent>
        </Cards>
      ))}
    </NewsWrapper>
  </Layout>
);
