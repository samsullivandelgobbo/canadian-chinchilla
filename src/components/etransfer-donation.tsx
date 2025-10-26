"use client";

import { useState } from "react";
import { Copy, Check, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ETRANSFER_EMAIL = "canadianchinchillarescue@gmail.com";

export function ETransferDonation() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(ETRANSFER_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-3">
        <Image
          src="/interac-logo.png"
          alt="Interac e-Transfer"
          width={120}
          height={40}
          className="h-7 w-auto opacity-90"
        />
        <h3
          className="text-2xl md:text-3xl font-semibold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Donate via e-Transfer
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          100% of your donation goes to chinchilla care with zero processing
          fees.
        </p>
      </div>

      {/* Email Address Display */}
      <div className="bg-accent/50 rounded-xl p-5 border border-border">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-1.5">Send to</p>
            <p className="font-mono text-sm md:text-base font-medium truncate">
              {ETRANSFER_EMAIL}
            </p>
          </div>
          <Button
            onClick={copyToClipboard}
            variant="outline"
            size="sm"
            className="shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="ml-2">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="ml-2">Copy</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Canadian Banking App Quick Links */}
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Open your bank app to send an e-Transfer
        </p>

        <div className="grid grid-cols-3 gap-3">
          {[
            {
              name: "RBC",
              logo: "/bank-logos/rbc.svg",
              scheme: "rbcmobile://",
              web: "https://www.rbcroyalbank.com/ways-to-bank/online-banking/index.html",
            },
            {
              name: "TD",
              logo: "/bank-logos/td-bank.svg",
              scheme: "tdct://",
              web: "https://www.td.com/ca/en/personal-banking",
            },
            {
              name: "Scotiabank",
              logo: "/bank-logos/scotiabank.svg",
              scheme: "scotiabank://",
              web: "https://www.scotiabank.com/ca/en/personal.html",
            },
            {
              name: "BMO",
              logo: "/bank-logos/bmo.svg",
              scheme: "bmo://",
              web: "https://www.bmo.com/main/personal/bank-accounts/",
            },
            {
              name: "CIBC",
              logo: "/bank-logos/cibc.svg",
              scheme: "cibc://",
              web: "https://www.cibc.com/en/personal-banking.html",
            },
          ].map((bank) => (
            <button
              key={bank.name}
              onClick={() => {
                copyToClipboard();
                // Try mobile app first, fallback to web
                const isMobile = /iPhone|iPad|iPod|Android/i.test(
                  navigator.userAgent
                );
                if (isMobile) {
                  window.location.href = bank.scheme;
                  // Fallback to web if app doesn't open
                  setTimeout(() => {
                    window.open(bank.web, "_blank");
                  }, 1500);
                } else {
                  window.open(bank.web, "_blank");
                }
              }}
              className="flex items-center justify-center p-3 bg-white border border-border rounded-lg hover:border-primary/50 transition-colors duration-150"
            >
              <Image
                src={bank.logo}
                alt={`${bank.name} logo`}
                width={70}
                height={28}
                className="h-7 w-auto object-contain opacity-90"
              />
            </button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          No security question required • Auto-deposit enabled
        </p>
      </div>
    </div>
  );
}
