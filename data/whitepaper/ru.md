# YourJustice WhitePaper

<Paragraph className="subtitle">*Мы строим мост справедливости в более справедливый мир. Присоединяйтесь к проекту, меняющему правила игры, и создайте суверенитет и свободу для человечества.*</Paragraph>

## Юрисдикции, основанные на ваших собственных ценностях

Online tribes are built on values principles, not nationality.

* Social rating as a humanity metric
* Core values declared by communities, companies, states  and individuals
* Easy search of like-minded people, community members, customers and providers, staff, citizens or netizens

### History

In the 21st century people want a fairer world liberated from violence, despotism and parasitism. A world full of freedom and safety of our lives and property.

We live in the era of virtual communities, geo-independence, cross-border interactions entering a whole new world of hybrid realities. Conservative legislation systems can't offer fast and affordable conflict resolution for this emerging diversity of human relations. Millions of people live with their own traumas and pains unspoken.

### Bitcoin As A State Transition System

From a technical standpoint, the ledger of a cryptocurrency such as Bitcoin can be thought of as a state transition system, where there is a "state" consisting of the ownership status of all existing bitcoins and a <Link className="inline" to="/">"state transition function"</Link> that takes a state and a transaction and outputs a new state which is the result. In a standard banking system, for example, the state is a balance sheet, a transaction is a request to move $X from A to B, and the state transition function reduces the value in A's account by $X and increases the value in B's account by $X. If A's account has less than $X in the first place, the state transition function returns an error. Hence, one can formally define:

<Code>APPLY(S,TX) -> S' or ERROR</Code>

In the banking system defined above:

<Code>APPLY({ Alice: $50, Bob: $50 },"send $20 from Alice to Bob") = { Alice: $30, Bob: $70 }</Code>

## Social Rating & Justice on Blockchain

### Scripting

* **Namecoin** — created in 2010, Namecoin is best described as a decentralized name registration database. In decentralized protocols like Tor, Bitcoin and BitMessage, there needs to be some way of identifying accounts so that other people can interact with them, but in all existing solutions the only kind of identifier available is a pseudorandom hash like `1LW79wp5ZBqaHW1jL5TCiBCrhQYtHagUWy` Ideally, one would like to be able to have an account with a name like "george". However, the problem is that if one person can create an account named "george" then someone else can use the same process to register "george" for themselves as well and impersonate them. The only solution is a first-to-file paradigm, where the first registerer succeeds and the second fails - a problem perfectly suited for the Bitcoin consensus protocol. Namecoin is the oldest, and most successful, implementation of a name registration system using such an idea.
* **Colored coins** — the purpose of colored coins is to serve as a protocol to allow people to create their own digital currencies - or, in the important trivial case of a currency with one unit, digital tokens, on the <Link className="inline" to="https://www.blockchain.com/ru/explorer">Bitcoin blockchain</Link>. In the colored coins protocol, one "issues" a new currency by publicly assigning a color to a specific Bitcoin UTXO, and the protocol recursively defines the color of other UTXO to be the same as the color of the inputs that the transaction creating them spent (some special rules apply in the case of mixed-color inputs). This allows users to maintain wallets containing only UTXO of a specific color and send them around much like regular bitcoins, backtracking through the blockchain to determine the color of any UTXO that they receive.
* **Metacoins** — the idea behind a metacoin is to have a protocol that lives on top of Bitcoin, using Bitcoin transactions to store metacoin transactions but having a different state transition function, APPLY'. Because the metacoin protocol cannot prevent invalid metacoin transactions from appearing in the Bitcoin blockchain, a rule is added that if APPLY'(S,TX) returns an error, the protocol defaults to APPLY'(S,TX) = S. This provides an easy mechanism for creating an arbitrary cryptocurrency protocol, potentially with advanced features that cannot be implemented inside of Bitcoin itself, but with a very low development cost since the complexities of mining and networking are already handled by the Bitcoin protocol. Metacoins have been used to implement some classes of financial contracts, name registration and decentralized exchange.

<Table>
|Group|At launch|After 1 year|After 5 year|
|-----|---------|------------|------------|
|Currency units|1.198X|1.458X|2.498X|
|Purchasers|83 %|64 %|38 %|
|Reserve spent pre-sale|8 %|6 %|3 %|
|Reserve used post-sale|8 %|6 %|3 %|
|Miners|0 %|17 %|52 %|
</Table>

## Notes and Further Reading

### Notes

1. A sophisticated reader may notice that in fact a Bitcoin address is the hash of the elliptic curve public key, and not the public key itself. However, it is in fact perfectly legitimate cryptographic terminology to refer to the pubkey hash as a public key itself. This is because Bitcoin's cryptography can be considered to be a custom digital signature algorithm, where the public key consists of the hash of the ECC pubkey, the signature consists of the ECC pubkey concatenated with the ECC signature, and the verification algorithm involves checking the ECC pubkey in the signature against the ECC pubkey hash provided as a public key and then verifying the ECC signature against the ECC pubkey.
2. Technically, the median of the 11 previous blocks.
3. Internally, 2 and "CHARLIE" are both numbers, with the latter being in big-endian base 256 representation. Numbers can be at least 0 and at most 2256-1.

### Further Reading

1. [Intrinsic value](/)
2. [Smart property](/)
3. [Smart contracts](/)
4. [B-money](/)
5. [Reusable proofs of work](/)
6. [Bitcoin whitepaper](/)
7. [Namecoin](/)
8. [Zooko's triangle](/)
