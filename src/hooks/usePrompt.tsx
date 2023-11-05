import { useEffect, useState } from "react";
import { Prompt } from "../domain/prompt";
import Config from "../config";

export const usePrompt = () => {
    const [prompt, setPrompt]       = useState<Prompt | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]         = useState<any>(null);

    if(Config.MODE == "LOCAL"){
        setIsLoading(false);
        setPrompt(fakePrompt);
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setPrompt(result);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };

      fetchData();
    }, [""]);

    return { prompt, isLoading, error };
}

const fakePrompt = new Prompt({
    uuid  : "prompt1",
    title : "マーケティング戦略",
    aiName : "ChatGPT",
    chat : [
        `Gen Zとミレニアル世代にサングラスを売るためのマーケティング戦略を比較してください。`,
        `Gen Zとミレニアル世代はそれぞれ異なる特性や嗜好を持っており、そのためにそれぞれに適したマーケティング戦略が必要となります。以下にそれぞれの世代に合わせたマーケティング戦略を比較します。

            ### ミレニアル世代向けのサングラスのマーケティング戦略：

            1. **ブランドのストーリーテリング**: ミレニアル世代はブランドのストーリーに共感する傾向があります。持続可能性や社会的責任に焦点を当てたブランドメッセージングが効果的です。

            2. **ソーシャルメディアプロモーション**: InstagramやFacebookなどのビジュアルプラットフォームを活用して、ミレニアル世代に訴求力のある広告を展開します。インフルエンサーマーケティングも重要です。

            3. **カスタマイズ可能なオプションの提供**: ミレニアル世代は個性を大切にする傾向があります。サングラスにカスタマイズ可能なオプションを提供することで、消費者のニーズに合った商品を提供できます。

            4. **エクスペリエンス重視の販売戦略**: ミレニアル世代は商品の購入体験を重視する傾向があります。試着やポップアップストアなどのイベントを通じて、商品を体験できる機会を提供することが有効です。

            ### Gen Z向けのサングラスのマーケティング戦略：

            1. **エモーショナルなコネクションの構築**: Gen Zはブランドとのエモーショナルなつながりを重視します。ブランドが持つ社会的価値観や使命に共感できるメッセージが重要です。

            2. **動画コンテンツの活用**: YouTubeやTikTokなどの動画プラットフォームを使用して、動画コンテンツを通じて商品を宣伝します。ユーモアやクリエイティブな要素を取り入れることが重要です。

            3. **限定商品やコレクションの提供**: Gen Zは限定商品や限定コレクションに興味を持ちます。限定版のサングラスを提供することで、消費者の興味を引き付けることができます。

            4. **インタラクティブなマーケティングキャンペーンの展開**: ゲーミフィケーションやAR技術を活用したインタラクティブなマーケティングキャンペーンを展開することで、消費者の参加度を高めることができます。

            以上のマーケティング戦略は、それぞれの世代の特性や嗜好に合わせたものです。マーケターはこれらの要素を考慮し、ターゲット顧客層に合った戦略を適切に組み立てることが重要です。
        `
    ],
    memo : "",
    userUuid : "user1",
    userName : "user1",
    book : 10,
    isBooked : true
});