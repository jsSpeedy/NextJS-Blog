import { useRouter } from "next/router";
import Error from "next/error";
import Layout from "../../components/Layout";

const data = [
  {
    slug: "haber-1",
    title: "Koruma Biyolojisi Nedir?",
    src: "https://cdn.evrimagaci.org/WVC0ZN7uuUTgnD_kx7qbv77rjrc=/825x0/filters:format(webp)/storage.evrimagaci.org%2Fcontent%2F2fea3ff6-5d1e-4d1e-bd93-3b1b14ea718b.jpeg",
    text: `Günümüzde gerçekleşen habitat kayıpları biyoçeşitliliğin hızla azalmasına neden olmaktadır. Nesli tükenmekte olan türler; iklim değişikliği, avlanma, kirlilik ve habitat kaybı gibi birçok faktöre maruz kalarak dünya üzerindeki varlıklarını devam ettirmeye çalışmaktadır. Özellikle de yaşanan habitat kayıpları birçok türün neslinin tükenme tehlikesi altına girmesinin başlıca nedenlerinden biridir. Bu durum, türlerin göç yollarını keserek ve nüfuslarını azaltarak onları olumsuz etkilemektedir. Bu sorunların ortaya çıkmasındaysa insan etkisi önemli bir yer tutmaktadır. Hızla artan nüfus ve talepler, doğal kaynakların aşırı kullanımına ve ekosistemlerde daha fazla baskıya neden olmaktadır.

        Dolaysıyla nesli tükenmekte olan türleri ve habitat kayıplarını durdurmak için eyleme geçilmesi gerekmektedir. Koruma çabalarını, doğal yaşam alanlarının sürdürülebilir kullanımını teşvik etmek ve nesli tükenmekte olan türleri korumak için stratejiler geliştirmek üzerine odaklanılmalıdır. Bu durum, koruma projelerine ve stratejilerine var olan ihtiyacı artırarak ekosistemlerdeki türlerin genetik çeşitliliği, doğal yaşam alanlarını ve ekosistem işlevselliğini koruma çabalarını içeren koruma biyolojisi (İng: "conservation biology") alanın doğmasını sağlamaktadır. Koruma biyolojisi kapsamında koruma projelerini gerçekleştiren bilim insanları, bazı durumlarda ekosistemleri ya da ekosistem birimlerini incelemek ve bunların tamamını korumaya yönelik tedbir almak yerine belirli bir ekosistem bütününü temsil eden temsilci türlere (İng: "representative species") odaklanmaktadır. Bu makalede koruma planlamaları, koruma planlamalarında kullanılan tür çeşitleri, koruma biyolojisi ve koruma biyolojisinin alt araştırma alanları gibi konular ele alınacaktır.`,
  },
  {
    slug: "haber-2",
    title: "Zaman Evrenin Dışında mı İçinde mi?",
    src: "https://cdn.evrimagaci.org/r-AaKtaH7NLfnG-Vl_HUPWoVzx8=/618x0/evrimagaci.org%2Fpublic%2Fqna_media%2F62b85b8de3c8d42a56fcd98ff606c1f3.jpeg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae, officia odio nulla ratione consequuntur dignissimos alias non ab asperiores unde officiis tempore qui quidem quia numquam facere consectetur quibusdam at. Totam fuga veniam officiis fugiat numquam sequi reprehenderit facere distinctio corrupti sit cum, possimus, rem eveniet rerum, vitae libero.`,
  },
];

export default ({}) => {
  const router = useRouter();
  const { slug } = router.query;

  let foundItem = data.find((dataItem) => dataItem.slug === slug);

  if (!foundItem) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout title={foundItem?.title}>
      <img src={foundItem?.src} alt="" />
      <h1>{slug}</h1>
      <p>{foundItem?.text}</p>
    </Layout>
  );
};
