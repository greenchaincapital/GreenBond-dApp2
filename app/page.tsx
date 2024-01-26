"use client"

import Link from "next/link";
// import { walletClient } from './client';
import type { NextPage } from "next";
import { useAccount, useNetwork } from "wagmi";
import { useAccountBalance, useDeployedContractInfo, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useEffect, useState } from "react";
import { ChevronDownIcon, Cog6ToothIcon, WalletIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { getTargetNetworks } from "~~/utils/scaffold-eth";
import { contracts } from "~~/utils/scaffold-eth/contract";
import scaffoldConfig from "~~/scaffold.config";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { data: LSD } = useDeployedContractInfo("LSD");
  // const { chain } = useNetwork();
  const { balance } = useAccountBalance(connectedAddress);
  const [tabOption, setTabOption] = useState(0);
  const [slippage, setSlippage] = useState(0.5);
  const [depositOption, setDepositOption] = useState(0);
  const [depositValue, setDepositValue] = useState(0);
  const [minimumReceiveLSDActual, setMinimumReceiveLSDActual] = useState("0");
  const [minimumReceiveLSD, setMinimumReceiveLSD] = useState("0");
  const [hideButton, setHideButton] = useState(true);

  // const writeDisabled = !chain || chain?.id !== getTargetNetworks()[0].id;

  const { data: receiveLSD, isLoading: isLoadingReceiveLSD } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "convertToShares",
    args: [
      depositValue.toString() == "" || depositValue.toString() == "0"
        ? 0n
        : BigInt(Math.round(Number(depositValue) * 10 ** 6)),
    ],
  });

  const { data: usdtBalance, isLoading: isLoadingUsdtBalance } = useScaffoldContractRead({
    contractName: "USDT",
    functionName: "balanceOf",
    args: [connectedAddress],
  });

  const { data: usdtAllowance, isLoading: isLoadingUsdtAllowance } = useScaffoldContractRead({
    contractName: "USDT",
    functionName: "allowance",
    args: [connectedAddress, LSD?.address],
  });

  const { writeAsync: w1, isLoading: isLoadingW1 } = useScaffoldContractWrite({
    contractName: "USDT",
    functionName: "approve",
    args: [
      LSD?.address,
      depositValue.toString() == "" ? 0n : BigInt(Math.round(Number(depositValue) * 10 ** 6)),
    ],
  });

  const { writeAsync: w2, isLoading: isLoadingW2 } = useScaffoldContractWrite({
    contractName: "LSD",
    functionName: "deposit",
    args: [
      depositValue.toString() == "" ? 0n : BigInt(Math.round(Number(depositValue) * 10 ** 6)),
      connectedAddress,
    ],
  });


  useEffect(() => {
    if (receiveLSD != undefined) {
      minimumCalculator(receiveLSD);
    }
  }, [slippage, receiveLSD]);

  const customFormatEther = (x: any, dec: number = 6) => {
    const value = Number(x) / (10 ** dec);
    const digits = parseInt(value.toString()).toString().length;
    if (digits >= 7) {
      return [value, Number(value).toFixed(0)];
    } else {
      return [value, Number(value).toFixed(7 - digits)];
    }
  };

  const minimumCalculator = (x: bigint) => {
    // x = x.sub(x.mul(ethers.utils.parseUnits((slippage * 100).toString(),6)).div(ethers.utils.parseUnits("10000",6)));
    x = x * (10000n - BigInt(slippage * 100))/10000n;
    const data = customFormatEther(x);
    setMinimumReceiveLSDActual(data[0]);
    setMinimumReceiveLSD(data[1]);
  };

  const setCustomSlippage = (e: any) => {
    if (e.target.value == "" || Number(e.target.value) > 100) {
      setSlippage(0);
    } else {
      setSlippage(Number(Number(e.target.value).toFixed(2)));
    }
  };

  // const addTokenToWallet = () => {
  //   walletClient.watchAsset({
  //     type: 'ERC20',
  //     options: {
  //       address: LSD?.address,
  //       decimals: 6,
  //       symbol: 'gBOND2',
  //       image: "/logo2-32.png",
  //     }
  //   });

  // };

  useEffect(() => {
    if (window.ethereum) {
      setHideButton(false);
    }
  }, []);

  // Tab 1

  const [redeemValue, setRedeemValue] = useState("0");
  const [unwrap, setUnwrap] = useState(false);
  const [minimumReceiveWMaticActual, setMinimumReceiveWMaticActual] = useState("0");
  const [minimumReceiveWMatic, setMinimumReceiveWMatic] = useState("0");

  const { data: lsdBalance, isLoading: isLoadingLsdBalance } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "balanceOf",
    args: [connectedAddress],
  });

  const { data: receiveUsdt, isLoading: isLoadingReceiveUsdt } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "convertToAssets",
    args: [
      redeemValue.toString() == ""
        ? 0n
        : BigInt(Math.round(Number(redeemValue) * 10 ** 6)),
    ],
  });

  const { data: lsdAllowance, isLoading: isLoadingLsdAllowance } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "allowance",
    args: [connectedAddress, LSD?.address],
  });

  const { writeAsync: w4, isLoading: isLoadingW4 } = useScaffoldContractWrite({
    contractName: "LSD",
    functionName: "approve",
    args: [
      LSD?.address,
      redeemValue.toString() == "" ? 0n : BigInt(Math.round(Number(redeemValue) * 10 ** 6)),
    ],
  });

  const { writeAsync: w5, isLoading: isLoadingW5 } = useScaffoldContractWrite({
    contractName: "LSD",
    functionName: "redeem",
    args: [
      redeemValue.toString() == "" ? 0n : BigInt(Math.round(Number(redeemValue) * 10 ** 6)),
      connectedAddress,
      connectedAddress,
    ],
  });


  useEffect(() => {
    if (receiveUsdt != undefined) {
      minimumCalculator2(receiveUsdt);
    }
  }, [slippage, receiveUsdt]);

  const minimumCalculator2 = (x: bigint) => {
    // x = x.sub(x.mul(ethers.utils.parseUnits((slippage * 100).toString(),6)).div(ethers.utils.parseUnits("10000",6)));
    x = x * (10000n - BigInt(slippage * 100))/10000n;
    const data = customFormatEther(x,6);
    setMinimumReceiveWMaticActual(data[0]);
    setMinimumReceiveWMatic(data[1]);
  };

  return (
    <>
      <div className="flex justify-around mt-12">
        <div className="card w-11/12 lg:w-5/12 bg-base-100 shadow-xl mx-4 ">
          <div className="card-body p-6">
            <div className="tabs tabs-boxed">
              <div className="grow">
                {tabOption == 0 ? (
                  <a className="tab tab-active font-medium">DEPOSIT</a>
                ) : (
                  <a className="tab font-medium" onClick={() => setTabOption(0)}>
                    DEPOSIT
                  </a>
                )}
                {tabOption == 1 ? (
                  <a className="tab tab-active font-medium">REDEEM</a>
                ) : (
                  <a className="tab font-medium" onClick={() => setTabOption(1)}>
                    REDEEM
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* Tab Content */}
          {/* Tab 0 */}
          <div className={`card-body px-6 pt-0 pb-6 ${tabOption == 0 ? "" : "hidden"}`}>
            <div>
              <div className="flex flex-row mt-2">
                <input
                  type="number"
                  placeholder="Deposit amount"
                  className="input input-bordered input-primary grow min-w-0"
                  value={depositValue}
                  onChange={e => {
                    setDepositValue(e.target.value);
                  }}
                />
                <div>
                  <button className="ml-3 btn btn-secondary no-animation">USDT</button>
                </div>
              </div>
              <div className="flex flex-row justify-end mt-2">
                <div
                  className="tooltip tooltip-secondary"
                  data-tip="Ensure that the depositing value is less then or equal to the balance!"
                >
                  <button>
                    <InformationCircleIcon className="h-4 w-4 mr-0.5 mt-1" />
                  </button>
                </div>
                {(
                  <>
                    <button
                      className="btn btn-ghost btn-xs opacity-70"
                      onClick={() => setDepositValue(Number(usdtBalance)/10**6)}
                    >
                      MAX
                    </button>
                    <span className="m-0 ml-0.5 mt-px text-sm opacity-50">
                      Balance:{" "}
                      {usdtBalance != undefined ? (Number(usdtBalance)/10**6).toFixed(4) : "0"}
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="divider">WILL RECEIVE</div>
            <div>
              <div className="flex flex-row justify-between">
                <div className="m-0 ml-3 text-2xl">
                  {isLoadingReceiveLSD ? (
                    <button className="btn btn-ghost loading"></button>
                  ) : (
                    <div className="tooltip tooltip-secondary" data-tip={customFormatEther(receiveLSD? receiveLSD : 0n)[0]}>
                      <button>{customFormatEther(receiveLSD? receiveLSD : 0n)[1]}</button>
                    </div>
                  )}{" "}
                  GreenBond
                </div>
                {/* <button
                  className="btn btn-secondary btn-xs "
                  onClick={addTokenToWallet}
                >
                  <WalletIcon className="h-4 w-4 mr-2" /> Add GreenBond
                </button> */}
              </div>
              <div className="m-0 ml-3 text-sm opacity-50">
                Minimum:{" "}
                {isLoadingReceiveLSD ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <button>{minimumReceiveLSD}</button>
                )}
              </div>
            </div>
            {depositOption == 0 &&
            usdtAllowance != undefined &&
            Number(depositValue) > Number(usdtAllowance)/10**6 ? (
              <button className="btn btn-primary mt-4 w-full" onClick={w1}>
                Approve
              </button>
            ) : (
              ""
            )}
            <button
              className="btn btn-primary mt-4 w-full"
              onClick={w2}
              disabled={
                (depositOption == 0 &&
                  usdtAllowance != undefined &&
                  Number(depositValue) > Number(usdtAllowance)/10**6)
              }
            >
              Deposit
            </button>
          </div>
          {/* Tab 1 */}
          <div className={`card-body px-6 pt-0 pb-6 ${tabOption == 1 ? "" : "hidden"}`}>
            <div>
              <div className="flex flex-row mt-2">
                <input
                  type="number"
                  placeholder="Deposit amount"
                  className="input input-bordered input-primary grow"
                  value={redeemValue}
                  onChange={e => {
                    setRedeemValue(e.target.value);
                  }}
                />
                <button className="ml-3 btn btn-secondary no-animation">GreenBond</button>
              </div>
              <div className="flex flex-row justify-end mt-2 ">
                <div
                  className="tooltip tooltip-secondary"
                  data-tip="Ensure that the redeeming value is less then or equal to the balance!"
                >
                  <button>
                    <InformationCircleIcon className="h-4 w-4 mr-0.5 mt-1" />
                  </button>
                </div>
                <button
                  className="btn btn-ghost btn-xs opacity-70"
                  onClick={() => setRedeemValue((Number(lsdBalance)/10**6).toFixed(4))}
                >
                  MAX
                </button>
                <span className="m-0 ml-0.5 mt-px text-sm opacity-50">
                  Balance: {isLoadingLsdBalance? "0" : (Number(lsdBalance)/10**6).toFixed(4)}
                </span>
              </div>
            </div>

            <div className="divider">WILL RECEIVE</div>
            <div>
              <div className="m-0 ml-3 text-2xl">
                {receiveUsdt == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(receiveUsdt,6)[0]}>
                    <button>{customFormatEther(receiveUsdt,6)[1]}</button>
                  </div>
                )}{" "}
                USDT
              </div>
              <div className="m-0 ml-3 text-sm opacity-50">
                Minimum:{" "}
                {receiveUsdt == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <button>{minimumReceiveWMatic}</button>
                )}
              </div>
            </div>
            {lsdAllowance != undefined &&
            Number(redeemValue) > Number(lsdAllowance)/10**6 ? (
              <button className="btn btn-primary mt-4 w-full" onClick={w4}>
                Approve
              </button>
            ) : (
              ""
            )}
            <button
              className="btn btn-primary mt-4 w-full"
              onClick={w5}
              disabled={
                (lsdAllowance != undefined && Number(redeemValue) > Number(lsdAllowance)/10**6)
              }
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
