
"use client";

import { useAccount } from "wagmi";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";
import Link from "next/link";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import Image from "next/image";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { targetNetwork } = useTargetNetwork();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
            <span className="block text-xl font-bold">(Speedrun Ethereum Challenge: Crowdfunding App extension)</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} chain={targetNetwork} />
          </div>
          
  <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center mb-6">
          <span className="block text-2xl mb-2">Speedrun Ethereum</span>
          <span className="block text-4xl font-bold">Challenge: 📣 Crowdfunding App</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/hero.png"
            width="727"
            height="231"
            alt="challenge banner"
            className="border-4 border-primary"
          />
          <div className="max-w-3xl">
            <p className="text-center text-lg mt-8">
              🦸 A superpower of Ethereum is allowing you, the builder, to create a simple set of rules that an
              adversarial group of players can use to work together. In this challenge, you create a decentralized
              application where users can coordinate a group funding effort. If the users cooperate, the money is
              collected in a second smart contract. If they defect, the worst that can happen is everyone gets their
              money back. The users only have to trust the code, not each other.
            </p>
            <p className="text-center text-lg">
              🌟 The final deliverable is deploying a Dapp that lets users send ether to a contract and then fund the cause if the
              conditions are met, then deploy your app to a public webserver. Submit the url on{" "}
              <a href="https://speedrunethereum.com/" target="_blank" rel="noreferrer" className="underline">
                SpeedrunEthereum.com
              </a>{" "}
              !
            </p>
          </div>
        </div>
      </div>
    </div>

        </div>

        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
            <div className="flex flex-col bg-base-100 border border-base-300 px-10 py-10 text-center items-center max-w-xs">
              <BugAntIcon className="h-8 w-8" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 border border-base-300 px-10 py-10 text-center items-center max-w-xs">
              <MagnifyingGlassIcon className="h-8 w-8" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
