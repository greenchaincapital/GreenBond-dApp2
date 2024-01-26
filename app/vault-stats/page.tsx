"use client"

import Link from "next/link";
// import { walletClient } from './client';
import type { NextPage } from "next";
import { parseUnits, formatUnits  } from 'viem'
import { useAccount, useNetwork } from "wagmi";
import { useAccountBalance, useDeployedContractInfo, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useEffect, useState } from "react";
import { ChevronDownIcon, Cog6ToothIcon, WalletIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { getTargetNetworks } from "~~/utils/scaffold-eth";
import { contracts } from "~~/utils/scaffold-eth/contract";
import scaffoldConfig from "~~/scaffold.config";

const VaultStats: NextPage = () => {
    const { data: invested, isLoading: isLoadingInvested } = useScaffoldContractRead({
      contractName: "LSD",
      functionName: "totalSupply",
    });
  
    const { data: currentAmount, isLoading: isLoadingCurrentAmount } = useScaffoldContractRead({
      contractName: "LSD",
      functionName: "totalAssets",
    });
  
    const { data: cost, isLoading: isLoadingCost } = useScaffoldContractRead({
      contractName: "LSD",
      functionName: "convertToAssets",
      args: [parseUnits("1",6)],
    });
  
    const customFormatEther = (x: any, dec: number = 6) => {
      const value = Number(x) / (10 ** dec);
      const digits = parseInt(value.toString()).toString().length;
      if (digits >= 7) {
        return [value, Number(value).toFixed(0)];
      } else {
        return [value, Number(value).toFixed(7 - digits)];
      }
    };
  
    const currentAmountPercentage = () => {
      const base = isLoadingInvested? 0.0 : Number(formatUnits(invested? invested : 0n,6));
      const profit = isLoadingCurrentAmount? 0.0 : Number(formatUnits(currentAmount? currentAmount : 0n,6));
      return ((profit - base) * 100) / base;
    };
  
    return (
      <> 
        <div className="flex flex-col mt-8">
          <div className="flex flex-row flex-wrap">
            <div className="card bg-base-100 shadow-xl flex-1 m-4">
              <div className="flex flex-col items-center card-body p-6 pb-4">
                <span className="text-5xl">
                  {isLoadingInvested? (
                    <button className="btn btn-ghost loading"></button>
                  ) : (
                    <div className="tooltip tooltip-secondary" data-tip={customFormatEther(invested? invested : 0n)[0]}>
                      <button>{customFormatEther(invested? invested : 0n)[1]}</button>
                    </div>
                  )}
                </span>
                <span className="mt-11">USDT Deposited</span>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl flex-1 m-4">
              <div className="flex flex-col items-center card-body p-6 pb-4">
                <span className="text-5xl">
                  {isLoadingCurrentAmount? (
                    <button className="btn btn-ghost loading"></button>
                  ) : (
                    <div className="tooltip tooltip-secondary" data-tip={customFormatEther(currentAmount? currentAmount : 0n)[0]}>
                      <button>{customFormatEther(currentAmount? currentAmount : 0n)[1]}</button>
                    </div>
                  )}
                </span>
                {isLoadingInvested || isLoadingCurrentAmount ? (
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
                  {isLoadingCost ? (
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