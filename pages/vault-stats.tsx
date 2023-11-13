import Head from "next/head";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const VaultStats: NextPage = () => {
  const { data: invested } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "totalSupply",
  });

  const { data: currentAmount } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "totalAssets",
  });

  const { data: cost } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "convertToAssets",
    args: [ethers.utils.parseUnits("1",6)],
  });

  const customFormatEther = (x: any) => {
    const value = ethers.utils.formatUnits(x,6);
    const digits = parseInt(value).toString().length;
    if (digits >= 7) {
      return [value, Number(value).toFixed(0)];
    } else {
      return [value, Number(value).toFixed(7 - digits)];
    }
  };

  const currentAmountPercentage = () => {
    const base = Number(ethers.utils.formatUnits(invested,6));
    const profit = Number(ethers.utils.formatUnits(currentAmount,6));
    return ((profit - base) * 100) / base;
  };

  return (
    <>
      <Head>
        <title>GreenBond - Vault Stats</title>
        <meta
          name="description"
          content="GreenBond provides liquid staking derivatives and leverage staking derivatives on your usdt!"
        />
        <link rel="shortcut icon" href="/logo-32.png" />
      </Head>

      <div className="flex flex-col mt-8">
        <div className="flex flex-row flex-wrap">
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-5xl">
                {invested == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(invested)[0]}>
                    <button>{customFormatEther(invested)[1]}</button>
                  </div>
                )}
              </span>
              <span className="mt-11">USDT Deposited</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-5xl">
                {currentAmount == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(currentAmount)[0]}>
                    <button>{customFormatEther(currentAmount)[1]}</button>
                  </div>
                )}
              </span>
              {invested == undefined || currentAmount == undefined ? (
                ""
              ) : (
                <span className="text-sm">
                  {currentAmountPercentage() >= 0 ? (
                    <span className="text-green-400">{currentAmountPercentage().toFixed(2)}%</span>
                  ) : (
                    <span className="text-red-400">{currentAmountPercentage().toFixed(2)}%</span>
                  )}{" "}
                  more than deposited amount
                </span>
              )}
              <span className="mt-4">Currently Withdrawable USDT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-3xl">~ 8%</span>
              <div className="flex flex-row">
                <span className="mt-2">APY</span>
                <div
                  className="tooltip tooltip-secondary mt-2 ml-2"
                  data-tip="This is a hardcoded APY value based on the liquid and leverage staking derivate as of building this project. This will be updated with auto calculation of APY in some time!"
                >
                  <button>
                    <InformationCircleIcon className="h-4 w-4 mr-0.5 mt-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-3xl">
                {cost == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(cost)[0]}>
                    <button>{customFormatEther(cost)[1]}</button>
                  </div>
                )}
              </span>
              <span className="mt-2">Current Cost Of GreenBond</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaultStats;
