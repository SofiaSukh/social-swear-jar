import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-8">
      <motion.h1
        {...({} as React.HTMLAttributes<HTMLHeadingElement>)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center"
        as="h1"
>

      >
        The Social Swear Jar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-center max-w-xl"
      >
        Open Instagram during focus hours? Miss your NFC tap? You lose 1 USDC. A smart contract slashes your stake and sends it to a shared pot—rewarding the disciplined or funding public goods. It’s a decentralized dopamine penalty box. NFC x blockchain. Let’s go.
      </motion.p>

      <Button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "How It Works"}
      </Button>

      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <Card className="bg-zinc-900 text-white border-zinc-700">
            <CardContent className="space-y-4 p-6">
              <p>
                Your focus commitment, enforced by code: stake USDC, then tap your NFC tag to log intentional use.
              </p>
              <p>
                Miss the tap during distraction hours? The contract deducts 1 USDC and sends it to a shared pool.
              </p>
              <p>
                That pool can reward streak-holders, fund public goods, or support your group’s collective goals.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </main>
  );
}
