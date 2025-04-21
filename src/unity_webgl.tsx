import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl/distribution/exports";
import LoadingPage from "src/page/LoadingPage/LoadingPage";
import { ReactUnityEventParameter } from "react-unity-webgl/distribution/types/react-unity-event-parameters";
import { OKXUniversalConnectUI, SessionTypes } from "@okxconnect/ui";
import { universalUIPromise } from "./connector_okx";
import { OKXSolanaProvider } from "@okxconnect/solana-provider";
import { BLOCK_ID_LIST, config } from "src/constants/constants";
import { Connection, Transaction, PublicKey, SystemProgram } from "@solana/web3.js";
import {
  getAccount,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getOrCreateAssociatedTokenAccount,
  getAssociatedTokenAddress,
  createTransferInstruction,
} from "@solana/spl-token";
import { BlockIOResponseType, BlockIOType } from "src/types/blockio.type";
import { ShowPromiseResult } from "src/types/adsgram";
import { useAdsgram } from "src/hooks/useAdsgram";

function UnityWebGL() {
  // ====> VARIABLE
  const [universalUi, setUniversalUi] = useState<OKXUniversalConnectUI>();
  const [okxAddress, setOKXAddress] = useState("");
  const [okxHash, setOKXHash] = useState("");
  var session: SessionTypes.Struct | undefined;
  const [okxSolanaProvider, setOkxSolanaProvider] = useState<OKXSolanaProvider>();

  const connection = new Connection(config.SOLANA_RPC, "confirmed");

  var versionBuild = "trbuild";

  var versionDev = "1.0.69";

  var versionPro = "1.0.17";

  var firstOfInit = true;
  var firstOfCreate = true;
  // ====> CREATE SESSION
  const createSession = async () => {
    
  };

  // ====> INIT PROVIDER
  useEffect(() => {
   
  }, []);

  // ====> HANDLE CONNECT OKX
  const handleConnectOKX = async () => {
   
  };

  // Init unity webgl
  const { loadingProgression, unityProvider, isLoaded, sendMessage, addEventListener, removeEventListener, UNSAFE__unityInstance } =
    useUnityContext({
      codeUrl: `/unity-build/${versionBuild}.wasm.gz`,
      dataUrl: `/unity-build/${versionBuild}.data.gz`,
      frameworkUrl: `/unity-build/${versionBuild}.framework.js.gz`,
      loaderUrl: `/unity-build/${versionBuild}.loader.js`,
      webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
      cacheControl: (url) => {
        // console.log(url);
        return "no-store";
      },
    });

  var isFirstCreateSession = true;
  // ====> LISTEN PROVIDER CHANGE
  useEffect(() => {
    
  }, [universalUi, UNSAFE__unityInstance]);

  async function getBalance() {
    
  }

  function getUiAmountString(data: any): string {
    return "";
  }

  const sendTransaction = async (rAddress: string, value: number) => {
    
  };

  function getBlockhash(data: any): string {
    return "";
  }

  // Listen to the transaction event from Unity
  function onTransaction(...parameters: ReactUnityEventParameter[]) {
    const data = parameters[0] as unknown as { address: string; value: number };
    sendTransaction(data.address, data.value);
  }

  const onGetBalance = () => {
    getBalance();
  };

  function onDisconnect() {
    universalUi?.disconnect();
  }

  function onConnect() {
    handleConnectOKX();
  }

  function getInitAccount() {
    // console.log("okxAddress: ", okxAddress);
    sendMessage("ReactConnectWallet", "WalletChangeStatus", okxAddress);
  }

  function onShowAds() {
    handleOnShowAd();
  }

  useEffect(() => {

    
    if (UNSAFE__unityInstance != null) {
      if (firstOfCreate) {
        firstOfCreate = false;
        sendMessage("ReactConnectWallet", "SendBaseUrl", config.BASE_URL);
        sendMessage("ReactConnectWallet", "SendEnv", config.RUN_ENV);
        sendMessage("ReactConnectWallet", "SendVersion", config.RUN_ENV == "develop" ? versionDev : versionPro);
      }
      // console.log("firstOfInit: ", firstOfInit);
      if (firstOfInit) {
        firstOfInit = false;
        sendMessage("ReactConnectWallet", "InitAll", "");
      }
    }
    return () => {
      
    };
  }, [addEventListener, removeEventListener, UNSAFE__unityInstance, okxAddress]);

  const copyRef = useRef<HTMLButtonElement>(null);

  const copy = () => {
    navigator.clipboard
      .writeText(okxAddress)
      .then(() => {
        console.log("Copied");
      })
      .catch(() => {
        console.log("Failed");
      });
  };

  const onCopy = () => {
    copyRef.current?.click();
  };

  const onPaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        console.log(text);
        sendMessage("GalxeEvmAddressPopup", "ReceivePaste", text);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  // getBlockIO({
  //   method: "getBalance",
  //   params: ["HsF82EqpZtvHF7M3QwsLayBvJRgoR7figGguhw5g1dTj", null],
  // });
  const getBlockIO = async ({ method, params }: BlockIOType) => {
    let result;
    return result;
  };

  const navigateExplorer = (txHash: string) => {
    (window as any).Telegram.WebApp.openLink(`https://solscan.io/tx/${txHash}`);
  };

  const onReward = useCallback(() => {
    console.log("AdsRewardSuccess");
    sendMessage("ReactConnectWallet", "AdsRewardSuccess", "");
  }, [UNSAFE__unityInstance, okxAddress]);
  const onError = useCallback((result: ShowPromiseResult) => {
    console.log("AdsRewardFail", result);
    sendMessage("ReactConnectWallet", "AdsRewardFail", "");
  }, [UNSAFE__unityInstance, okxAddress]);

  /**
   * insert your-block-id
   */
  const showAd = useAdsgram({ blockId: "7389", onReward, onError });

  // Call this function when click on button in Unity
  const handleOnShowAd = () => {
    console.log("handleOnShowAd");
    showAd();
  };

  return (
    <Fragment>
      <div hidden>
        <button ref={copyRef} onClick={copy}></button>
      </div>
      {(UNSAFE__unityInstance == null || universalUi == null || !isLoaded) && <LoadingPage progress={loadingProgression} />}
      <Unity
        unityProvider={unityProvider}
        style={{
          height: "100vh",
          width: "100%",
          display: isLoaded ? "block" : "none",
        }}
        devicePixelRatio={window.devicePixelRatio}
        disabledCanvasEvents={["dragstart"]}
      />
    </Fragment>
  );
}

export { UnityWebGL as UnityTest };
