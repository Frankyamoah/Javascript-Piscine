/* Create two functions which accept a string, and return a string:

RNA: that converts a DNA strand into its compliment RNA strand.
DNA: that converts an RNA strand into its compliment DNA strand.
Compliments:

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand. */

function RNA(dnaStrand) {
    let rnaStrand = "";
    for (let i = 0; i < dnaStrand.length; i++) {
      const nucleotide = dnaStrand[i];
      switch (nucleotide) {
        case "G":
          rnaStrand += "C";
          break;
        case "C":
          rnaStrand += "G";
          break;
        case "T":
          rnaStrand += "A";
          break;
        case "A":
          rnaStrand += "U";
          break;
        default:
          throw new Error(`Invalid nucleotide: ${nucleotide}`);
      }
    }
    return rnaStrand;
  }
  
  function DNA(rnaStrand) {
    let dnaStrand = "";
    for (let i = 0; i < rnaStrand.length; i++) {
      const nucleotide = rnaStrand[i];
      switch (nucleotide) {
        case "C":
          dnaStrand += "G";
          break;
        case "G":
          dnaStrand += "C";
          break;
        case "A":
          dnaStrand += "T";
          break;
        case "U":
          dnaStrand += "A";
          break;
        default:
          throw new Error(`Invalid nucleotide: ${nucleotide}`);
      }
    }
    return dnaStrand;
  }
  