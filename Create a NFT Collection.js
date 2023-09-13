/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, color, rarity) {
    const nft = {
      "name": name,
      "color": color,
      "rarity": rarity,
    };
    NFTs.push(nft)
    return;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    
    console.log("NFT List:\n");
    for(let i = 0; NFTs[i]; i++){
        console.log("Name: " + NFTs[i].name);
        console.log("Color: " + NFTs[i].color);
        console.log("Rarity: " + NFTs[i].rarity + "\n");
    }
    
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    
    var i = 0;
    while(NFTs[i]){
        i++;
    }
    console.log("Total number of NFTs: " + i + "\n");
    
}

// call your functions below this line

mintNFT('Dog', 'Brown', 'Common');
mintNFT('Cat', 'Gray', 'Uncommon');
mintNFT('Parrot', 'Rainbow', 'Rare');
mintNFT('Pegasus', 'Red', 'Legendary');

listNFTs();

getTotalSupply();