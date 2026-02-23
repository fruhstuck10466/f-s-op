import React, { useState } from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

import PovidoneIodineImage from "/src/assets/images/products/povidone-iodine-faholo-chemicals.jpg"
import TinctureofIodineImage from "/src/assets/images/products/tincture-of-iodine-faholo-chemicals.jpg"
import AntisepticImage from "/src/assets/images/products/antiseptic-faholo-chemicals.jpg"
import ChlorhexidineImage from "/src/assets/images/products/chlorhexidine-faholo-chemicals.jpg"
import GlutalbenzalImage from "/src/assets/images/products/glutalbenzal-faholo-chemicals.jpg"
import CalamineLotionImage from "/src/assets/images/products/calamine-lotion-faholo-chemicals.jpg"
import BenzylBenzoateImage from "/src/assets/images/products/benzyl-benzoate-faholo-chemicals.jpg"
import FarmLinimentImage from "/src/assets/images/products/farm-liniment-faholo-chemicals.jpg"
import HydrogenPeroxideImage from "/src/assets/images/products/hydrogen-peroxide-faholo-chemicals.jpg"
import GentianVioletImage from "/src/assets/images/products/gentian-violet-faholo-chemicals.jpg"
import LysolSolutionImage from "/src/assets/images/products/lysol-faholo-chemicals.jpg"
import SodiumHypochloriteImage from "/src/assets/images/products/sodium-hypochlorite-faholo-chemicals.jpg"
import SurgicalSpiritImage from "/src/assets/images/products/surgical-spirit-faholo-chemicals.jpg"
import MethylatedSpiritImage from "/src/assets/images/products/methylated-spirit-faholo-chemicals.jpg"
import InstantHandSanitizerImage from "/src/assets/images/products/instant-hand-sanitiser-faholo-chemicals.jpg"
import MedicinalBoricAcidImage from "/src/assets/images/products/boric-acid-new-faholo-chemicals.jpg"
import HandWashingGel from "/src/assets/images/products/handwashing-gel-faholo-chemicals.jpg"
import EmulsifyingOintmentImage from "/src/assets/images/products/emulsifying-ointment-faholo-chemicals.jpg"
import PureGlycerineImage from "/src/assets/images/products/pure-glycerin-faholo-chemicals.jpg"
import CastorOilImage from "/src/assets/images/products/castor-oil-faholo-chemicals.jpg"
import LiquidParaffinImage from "/src/assets/images/products/liquid-paraffin-faholo-chemicals.jpg"
import MassageOilImage from "/src/assets/images/products/massage-oil-faholo-chemicals.jpg"
import AceticAcidImage from "/src/assets/images/products/acetic-acid-faholo-chemicals.jpg"
import MultipurposeLiquidImage from "/src/assets/images/products/cleaning-detergent-faholo-chemicals.jpg"
import AqueousCreamImage from "/src/assets/images/products/aqueous-cream-faholo-chemicals.jpg"
import CitricAcidDisinfectantImage from "/src/assets/images/products/citric-acid-disinfectant-faholo-chemicals.jpg"
import ZincCastorOintmentImage from "/src/assets/images/products/zinc-and-castor-ointment-faholo-chemicals.jpg"
import UltrasoundGelImage from "/src/assets/images/products/ultrasound-gel-faholo-chemicals.jpg"
import SanitisingSprayImage from "/src/assets/images/products/hand-sanitising-spray-faholo-chemicals.jpg"
import PovidoneIodineSevenPercentImage from "/src/assets/images/products/povidone-iodine-7.5-percent-faholo-chemicals.jpg"
import NailPolishRemoverImage from "/src/assets/images/products/nail-polish-remover-faholo-chemicals.jpg"
import ZincOxidePasteImage from "/src/assets/images/products/zinc-oxide-paste-faholo-chemicals.jpg"
import SodiumHypochloriteTenPercentImage from "/src/assets/images/products/sodium-hypochlorite-10-percent-faholo-chemicals.jpg"
import FoodWarmingGelImage from "/src/assets/images/products/food-warming-gel-faholo-chemicals.jpg"
import LaundryDetergentBoosterImage from "/src/assets/images/products/laundry-detergent-booster-faholo-chemicals.jpg"
import XyleneImage from "/src/assets/images/products/xylene-faholo-chemicals.jpg"
import WhiteSpiritImage from "/src/assets/images/products/white-spirit-faholo-chemicals.jpg"
import ZincOxideOintmentImage from "/src/assets/images/products/zinc-oxide-ointment-faholo-chemicals.jpg"
import SurgicalSpiritNinetyPercentImage from "/src/assets/images/products/surgical-spirit-90-percent-faholo-chemicals.jpg"
import AcetoneImage from "/src/assets/images/products/acetone-faholo-chemicals.jpg"
import EusolSolutionImage from "/src/assets/images/products/eusol-solution-faholo-chemicals.jpg"
import IsopropylAlcoholImage from "/src/assets/images/products/isopropyl-alcohol-faholo-chemicals.jpg"
import DeionizedWaterImage from "/src/assets/images/products/denatured-ethanol-faholo-chemicals.jpg"
import DenaturedEthanolImage from "/src/assets/images/products/denatured-ethanol-faholo-chemicals.jpg"
import MethylatedSpiritForFoodWarmingImage from "/src/assets/images/products/methylated-spirit-90-percent-for-food-warming-faholo-chemicals.jpg"
import LugolsOfIodineImage from "/src/assets/images/products/lugols-of-iodine-faholo-chemicals.jpg"
import AbsoluteMethanolImage from "/src/assets/images/products/absolute-methanol-99.9-percent-faholo-chemicals.jpg"
import EpsomSaltImage from "/src/assets/images/products/epsom-salt-faholo-chemicals.jpg"


import { AnimatePresence, motion } from "framer-motion";

//styles
import {
  ProductContainer,
  ProductsWrapper,
  ProductsWrapperInner,
  ProductsInstructions,
  ProductsDropdown,
  CategoriesHeader,
  CategoryIcon,
  CategoriesList,
  CategoryTitle,
  ProductDetailsContainer,
  ProductImage,
  ProductUsage,
} from "../styles/productStyles";

const categoriesAndList = [
  {
    id: 0,
    title: "Povidone Iodine 10% w/v.",
    image: PovidoneIodineImage, // Placeholder for product image
    items: [
      "A topical antiseptic used for the prevention and treatment of skin infections on minor wounds, cuts, grazes, abrasions and blisters.",
      "Minor Wounds - Povidone Iodine is used to prevent and treat minor wounds and skin infections. This includes cuts, small areas of burn, ulcers, and minor injuries",
      "Surgical Procedures - Povidone Iodine is also used to sanitize the skin before a surgical procedure is performed",
      "Pack size includes 50ml, 100ml, 125ml, 200ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 1,
    title: "Tincture of Iodine 2.5% w/v.",
    image: TinctureofIodineImage,
    items: [
      "Contains Iodine 2.5% w/v, KI 2.5 w/v.",
      "An antiseptic solution that contains iodine and potassium iodide, and used on minor wounds, cuts and scrapes to aid their healing process.",
      "Disinfectant - Tincture of Iodine is often found in emergency survival kits, used both to disinfect wounds and to sanitise surface water for drinking.",
      "Medical Procedures - Tincture of Iodine is frequently used in hospitals as a disinfectant because it can destroy both bacteria and viruses. It is also used in many medical procedure such as colonoscopies and some x-ray exams",
      "Please note that it should not be used on newborn infants, large open wounds, or for long periods",
      "Effectively penetrates the skin to target fungal infections beneath the surface of the skin or affected area.",
      "Pack size includes 30ml, 50ml, 100ml, 200ml, 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 2,
    title: "FAHOLO Antiseptic.",
    image: AntisepticImage,
    items: [
      "Contains Chlorhexidine BP 0.3% w/v and Cetrimide BP 3% w/v.",
      "Disinfectant - FAHOLO Antiseptic is often found in emergency survival kits, used to disinfect wounds.",
      "Medical Procedures - FAHOLO Antiseptic is frequently used in hospitals as a disinfectant because it can destroy both bacteria and viruses. It is also used in many medical procedure such as colonoscopies and some x-ray exams",
      "Please note that it should not be used on newborn infants, large open wounds, or for long periods",
      "Pack size includes 50ml, 75ml, 100ml, 125ml, 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 3,
    title: "Chlorhexidine BP 5% w/v.",
    image: ChlorhexidineImage,
    items: [
      "It is an antiseptic and a disinfectant and used in:",
      "Mouth and Throat - Chlorhexidine helps reduce the number of germs in your mouth, and can help with mouth infections, mouth ulcers, gum disease, and sore throats. It is also used for denture care.",
      "Skin - Chlorhexidine is used to clean the skin after an injury, before surgery, or before an injection. It is also used for skin infections",
      "Surgical Equipment - Chlorhexidine is used in hospitals and clinics to clean skin or surgical equipment before surgery",
      "Dental Practice - Chlorhexidine is used to sterilize for surgeries and in healthcare practice, to reduce pocket depth in periodontitis, and to treat gingivitis",
      "Pack size includes 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 4,
    title: "Glutalbenzal.",
    image: GlutalbenzalImage,
    items: [
      "Contains Glutaraldehyde 2.4% w/v, Benzalkonium Chloride 0.5% and used in:",
      "Medical Applications - Glutalbenzal is commonly used in hospitals and other healthcare settings to sterilize surgical and medical equipment due to its potent antimicrobial properties.",
      "Industrial Applications - In the oil and gas industry, glutaraldehyde is used as a biocide in water treatment systems to control microbial growth. It’s also used in the leather tanning process for its cross-linking properties",
      "Cosmetics and Personal Care Products - Glutalbenzal can also be found in some cosmetics and personal care products as a preservative to prevent microbial growth",
      "Pack size includes 5lt + Activator",
    ],
  },
  {
    id: 5,
    title: "Calamine Lotion.",
    image: CalamineLotionImage,
    items: [
      "Skin Irritations - It is used to relieve pain, itching, and discomfort from minor skin irritations such as poison ivy, poison oak, and poison sumac. It also helps to dry the oozing and weeping caused by irritation due to these plants.",
      "Insect Bites - Calamine lotion can be applied to insect bites to relieve itchiness and provide a cooling sensation.",
      "Chickenpox and Shingles - It can help relieve the symptoms of chickenpox and shingles, and prevent skin infections.",
      "Swimmer’s Itch - Calamine lotion can be used to soothe the itchiness and warmth associated with swimmer’s itch",
      "Scabies: To ease itching from scabies, a skin condition caused by a small mite, you may find relief by using calamine lotion",
      "Minor Burns: Calamine lotion can also be used to treat minor burns",
      "Pack size includes 100ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 6,
    title: "Benzyl Benzoate 25% Solution(Lotion).",
    image: BenzylBenzoateImage,
    items: [
      "A topical medication used to treat infestations of lice and scabies.",
      "Lice treatment - Benzyl Benzoate is applied to thoroughly wet the dry hair and scalp or skin. The medicine is left on the affected areas for 24 hours, then washed off with warm water and soap or regular shampoo.",
      "Scabies treatment - Benzyl Benzoate is applied to cover the entire skin surface from the neck down, including the soles of your feet, and rubbed in well. The medicine is left on the body for 24 hours, then thoroughly washed off with warm water and soap.",
      "Pack size includes 100ml, 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 7,
    title: "Farm Liniment BP.",
    image: FarmLinimentImage,
    items: [
      "Farm Liniment is a type of topical medication that is typically used to relieve joint pain or muscle tension. Farm Liniment is often applied with friction to increase blood circulation to an injury or for sore, stiff muscles.",
      "Pack size includes 100ml, 250ml, 300ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 8,
    title: "Hydrogen Peroxide 6% & 30%.",
    image: HydrogenPeroxideImage,
    items: [
      "A more concentrated solution typically used for:",
      "Disinfectant - Hydrogen Peroxide can reduce the risk of infection when used to sanitize surfaces, produce, or products. It’s an effective disinfectant that can oxidize the cell membrane of a microorganism, leading to the death of the pathogen. It’s also indicated as an effective disinfectant against SARS-CoV-2, the virus that causes COVID-19",
      "Hair Bleaching and Lightening - Hydrogen Peroxide is used in hair dyes and teeth whitening products due to its higher concentration, which allows for faster and more dramatic results",
      "Industrial Cleaning - Hydrogen Peroxide is used in industrial settings for cleaning and disinfecting",
      "Pack size includes 200ml, 500ml, 5lt",
    ],
  },
  {
    id: 9,
    title: "Gentian Violet 1% Solution.",
    image: GentianVioletImage,
    items: [
      "A blue-violet dye derived from coal tar and is used as a topical medication for:",
      "Antifungal - Gentian Violet is primarily used against the fungus, Candida, which causes thrush. It’s also used to treat other types of fungus infections inside the mouth and on the skin",
      "Antibacterial and Antiviral - Gentian Violet has antibacterial and antiviral activity.",
      "Skin Infections - Gentian Violet is used for skin infections such as ringworm and athlete’s foot. It’s also used on minor cuts and scrapes to prevent infection.",
      "Disinfecting Wound - Gentian Violet is used for disinfecting wounds.",
      "Pack size includes 30ml, 50ml, 100ml, 5lt",
    ],
  },
  {
    id: 10,
    title: "Lysol Solution 6% and 12%.",
    image: LysolSolutionImage,
    items: [
      "A disinfectant concentrate used for cleaning and deodorizing. It’s proven to eliminate odor-causing bacteria, viruses, and everyday dirt and grime, used for:",
      "Disinfection - Lysol Solution kills 99.9% of viruses and bacteria1. It can eliminate germs on hard, non-porous surfaces such as Staphylococcus aureus, Salmonella enterica, Herpes Simplex Virus Type 1 and 2, and Influenza A2 Virus",
      "Cleaning - Lysol Solution cuts through tough grease and grime",
      "Deodorizing - Lysol Solution provides long-lasting freshness",
      "To use it for cleaning and deodorizing, dilute 1-1/4 oz. (2-1/2 tbsp.) per gallon of warm water, apply with a sponge or mop to wet all surfaces thoroughly, then wipe with a clean cloth. To use it as a disinfectant, remove heavy soil first, then add 2-1/2oz (5 tbsp.) to one quart of water and apply with a sponge or mop, wetting surface thoroughly. Let it stand for 10 minutes, then wipe away excess",
      "Pack size includes 1lt, 5lt, 20lt",
    ],
  },
  {
    id: 11,
    title: "Sodium Hypochlorite 4-6%.",
    image: SodiumHypochloriteImage,
    items: [
      "A common disinfectant and bleaching agent, used for:",
      "Disinfection - Sodium Hypochlorite is used to deactivate biological materials by inactivating vegetative bacteria, fungi, lipid and non-lipid viruses, and other liquid specimens. It’s also used for emergency disinfection of drinking water",
      "Cleaning - Sodium Hypochlorite is used in the laboratory to decontaminate surfaces and equipment",
      "Bleaching - Sodium Hypochlorite is the active ingredient in chlorine bleach",
      "It’s important to handle Sodium Hypochlorite 4-6% with care as it may be corrosive to metals, cause severe skin burns and eye damage, and is very toxic to aquatic life. Always wear protective gloves, protective clothing, eye protection, and face protection when using this substance. If swallowed, rinse mouth and do not induce vomiting. If it comes into contact with skin or hair, remove all contaminated clothing immediately",
      "Pack size includes 500ml, 1lt, 5lt, 20lt",
    ],
  },
  {
    id: 12,
    title: "Surgical Spirit 70%.",
    image: SurgicalSpiritImage,
    items: [
      "Also known as rubbing alcohol or isopropyl alcohol, is a colorless liquid that is commonly used in the healthcare industry for:",
      "Disinfection - Surgical Spirit is used to clean and sterilize surfaces, equipment, and tools in hospitals and other healthcare settings. It is effective at killing many types of bacteria, viruses, and fungi, making it an essential tool in infection control",
      "Skin Preparation - Surgical Spirit is used to disinfect small cuts and for sterilizing and hardening the skin. It is also used in skin preparation during sterile procedures",
      "Cooling Agent - Surgical Spirit is commonly used as a cooling agent for feverish conditions. It is typically applied topically to the skin, where it evaporates quickly, producing a cooling sensation that helps to reduce fever and soothe the skin",
      "Adhesive Removal - Surgical Spirit is used in the removal of adhesive bandages and other medical tapes. It can help to dissolve the adhesive, making it easier to remove the bandage without causing discomfort or irritation to the skin",
      "Pack size includes 50ml, 100ml, 250ml, 500ml, 1lt, 5lt, 20lt",
    ],
  },
  {
    id: 13,
    title: "Methylated Spirit 70%.",
    image: MethylatedSpiritImage,
    items: [
      "Also known as denatured alcohol, is a versatile substance with a range of uses:",
      "Disinfection - Methylated Spirit is a bactericidal hospital-grade disinfectant suitable for general purpose disinfection and cleaning of surfaces. It can also be used to sterilize equipment",
      "Cleaning - Methylated Spirit is used in industries, clinical settings, and households for cleaning surfaces and shining glass and stainless steel",
      "Antiseptic - Methylated Spirit is often used to clean wounds and prevent infection",
      "Pack size includes 60ml, 100ml, 250ml, 300ml, 500ml, 1lt, 5lt, 20lt",
    ],
  },
  {
    id: 14,
    title: "Instant Hand Sanitizer.",
    image: InstantHandSanitizerImage,
    items: [
      "A liquid, gel, or foam generally used to decrease infectious agents on the hands, can be used for:",
      "Disinfection: Hand sanitizers that contain at least 60% alcohol can quickly reduce the number of germs in many situations. They act by killing certain germs on the skin",
      "Cleaning - They are used when soap and water are not readily available for hand washing or when repeated hand washing compromises the natural skin barrier (e.g., causing scaling or fissures to develop in the skin",
      "Prevention - Using hand sanitizer is one of the most important steps you can take to avoid getting sick and spreading germs to those around you",
      "Pack size includes 50ml, 60ml, 100ml, 125ml, 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 15,
    title: "Medicinal Boric Acid.",
    image: MedicinalBoricAcidImage,
    items: [
      "A water-soluble white compound, is claimed to have antifungal and antimicrobial properties. It is used in various medicinal and homeopathic treatments, such as:",
      "Vaginal Health - It is often a part of homeopathic medicines used for treating vaginal discharge and itching",
      "Skin Care - Boric acid is used in dilute solutions as a treatment for diaper rash, insect bites and stings, and sunburns",
      "Ear Infections - It is helpful in treating various types of ear infections in both humans and pets",
      "Foot Odor - Boric Acid is helpful in treating foul foot odor. A person suffering from excessively smelly feet can apply boric acid powder mixed with talc to the inner side of footwear",
      "Wound Care - Boric acid when mixed with distilled water serves as a wound spray. The solution contains antiseptic properties that help in treating minor wounds such as cuts and burns",
      "Pack size includes 25gm, 50gm, 100gm, 250gm",
    ],
  },
  {
    id: 16,
    title: "Hand Washing Gel.",
    image: HandWashingGel,
    items: [
      "Preventing Infection - Hand Washing Gel is designed to kill germs and bacteria, which can help prevent the spread of illnesses",
      "Pack size includes 500ml, 1lt, 3lt, 5lt, 20lt",
    ],
  },
  {
    id: 17,
    title: "Emulsifying Ointment.",
    image: EmulsifyingOintmentImage,
    items: [
      "A type of moisturizer used to treat dry skin conditions such as eczema and dermatitis, can be used as a:",
      "Moisturizer - Emulsifying Ointment is used to moisturize very dry skin, such as in eczema or dermatitis. It leaves a thin layer of oil on the surface of the skin that stops water from evaporating, resulting in a soothing, softening, and moisturizing effect",
      "Pack size includes 100gm, 250gm, 500gm",
    ],
  },
  {
    id: 18,
    title: "Pure Glycerine BP.",
    image: PureGlycerineImage,
    items: [
      "Also known as glycerol, is a natural compound derived from vegetable oils or animal fats. It’s a clear, colorless, odorless, and syrupy liquid with a sweet taste. Can be used in:",
      "Skin Care - Glycerine is a humectant, a type of moisturizing agent that pulls water into the outer layer of your skin from deeper levels of your skin and the air. It is commonly used in skin care products to increase hydration on the top layer of your skin. It can also improve skin barrier function, provide protection against skin irritants, accelerate wound-healing processes, and relieve dry skin.",
      "Food Industry - Glycerine is a popular humectant that helps retain the moisture content in many products, such as shredded coconut, marshmallows, soft candies, and sweets.",
      "Pharmaceutical Industry: It’s widely used as a lubricant and humectant and as an essential ingredient in many cough syrups, ointments, expectorants, anesthetics, and lozenges.",
      "Pack size includes 30ml, 50ml, 100ml, 5lt",
    ],
  },
  {
    id: 19,
    title: "Castor Oil.",
    image: CastorOilImage,
    items: [
      "Laxative - Castor oil is well-known for its laxative properties. It stimulates the intestines, helping to relieve constipation.",
      "Skin and Hair Care - Castor oil is often used in skin and hair care products due to its moisturizing properties. It can help improve conditions like acne and stretch marks, and promote hair growth.",
      "Pain Relief and Inflammation Reduction - Castor oil can be used as a pack for pain relief and inflammation reduction.",
      "Eyebrow and Eyelash Growth - Rubbing castor oil on eyebrows and eyelashes can promote their growth and thickening.",
      "Immune Function Support - Massaging castor oil onto the abdomen can support immune function",
      "Pack size includes 30ml, 50ml, 100ml, 5lt",
    ],
  },
  {
    id: 20,
    title: "Liquid Paraffin BP.",
    image: LiquidParaffinImage,
    items: [
      "Also known as paraffinum liquidum or paraffin oil, is a highly refined mineral oil used in cosmetics and medicine. Can be used for:",
      "Constipation - In oral dosage form, liquid paraffin is used as a stool softener. It is used in the treatment of constipation by preventing dry and hard stools.",
      "Skin Conditions - The topical forms of liquid paraffin are used in combination with other medicines in skin care products. It is used for the prevention of dry skin.",
      "Pack size includes 30ml, 50ml, 100ml, 200ml, 5lt",
    ],
  },
  {
    id: 21,
    title: "Medicinal Massage Oil.",
    image: MassageOilImage,
    items: [
      "Used in aromatherapy and massage therapy for a variety of health and wellness benefits. ",
      "Aromatherapy - Essential oils used in massage oils can have various degrees of antimicrobial activity and are believed to have antiviral, antifungal, insecticidal, and antioxidant properties. They can provide respiratory disinfection, decongestant, and psychological benefits.",
      "Massage Therapy - Massage oils are absorbed through the skin during a massage, which can boost circulation and increase absorption. They can help with Sore Muscles, Inflammation and Flexibility, Back Pain, Arthritis and Joint Pain, Muscle Stiffness and Cramping, Circulation, Stress and Anxiety and Depression.",
      "Pack size includes 250ml, 300ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 22,
    title: "Acetic Acid (Vinegar) 4-6%.",
    image: AceticAcidImage,
    items: [
      "Also known as ethanoic acid, is a clear, colorless liquid with a strong and pungent smell. It is an organic compound and the main component of vinegar. Can be used for: ",
      "Industrial Use - Acetic acid is used in many industrial processes for the production of substrates. It is often used as a chemical reagent for the production of a number of chemical compounds like acetic anhydride, ester, vinyl acetate monomer, vinegar, and many other polymeric materials.",
      "Medical Use - Acetic acid has a lot of uses in the medical field. It can be used as an antiseptic against pseudomonas, enterococci, streptococci, staphylococci and others. It is also used in cervical cancer screening and for the treatment of infections. It is used as an agent to lyse (destruction of cells through lysin) red blood cells before white blood cells are examined. Vinegar has also been said to reduce high concentrations of blood sugar.",
      "Food Industry - In the food industry, acetic acid finds its use most commonly in commercial pickling operations, and in condiments like mayonnaise, mustard and ketchup. It is also used for seasoning various food items like salads etc. Additionally, vinegar can react with alkaline ingredients like baking soda and when that happens it produces a gas which helps to make baked goods become puffier",
      "Household Uses - Acetic acid which is a dilute solution is used extensively as vinegar. And as we are familiar with, vinegar is widely used for cleaning, laundry, cooking, and many other household uses. Farmers usually spray acetic acid on livestock silage to counter bacterial and fungal growth",
      "Pack size includes 300ml, 1lt, 5lt",
    ],
  },
  {
    id: 23,
    title: "Multipurpose Liquid.",
    image: MultipurposeLiquidImage,
    items: [
      "Cleaning - Multipurpose liquid soap can be used for light cleaning for wooden tables and other furniture, for mopping the floors, dishwashing, or even clothes. It can also be used as a grill and tap cleaner to cut grease/oil/dirt build up. ",
      "Pack size includes 5lt, 20lt",
    ],
  },
  {
    id: 24,
    title: "Aqueous Cream.",
    image: AqueousCreamImage,
    items: [
      "Moisturising Cream Base – Commonly used to help keep skin soft and hydrated. Skin Care Use – Suitable for daily skin care routines and cleansing purposes. General Personal Care – Used as a simple cream base for external application. External Use Only – Not intended for medical treatment. ",
      "Pack size includes: 100g, 250g, 500g",
    ],
  },
  {
    id: 25,
    title: "Citric Acid Disinfectant.",
    image: CitricAcidDisinfectantImage,
    items: [
      "Acid-Based Cleaning Solution – Used for equipment cleaning and maintenance. • Technical & Institutional Use – Suitable for controlled professional environments. • Non-Consumable Product. ",
      "Pack size includes: 1lt, 5lt, 10lt",
    ],
  },
  {
    id: 26,
    title: "Zinc Castor Ointment.",
    image: ZincCastorOintmentImage,
    items: [
      "Protective Ointment – Used as a barrier and skin-conditioning product. • Skin Care Use – Suitable for external skin care routines. • General Personal Care – Not intended for medical treatment. ",
      "Pack size includes: 100g, 250g, 500g",
    ],
  },
  {
    id: 27,
    title: "Ultrasound Gel.",
    image: UltrasoundGelImage,
    items: [
      "Conductive Gel – Designed to assist transmission between equipment and skin. • Professional & Technical Use – Suitable for use with compatible devices and equipment. • Non-Greasy Formula – Water-based gel for easy application and removal. • External Use Only – Not for ingestion. ",
      "Pack size includes: 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 28,
    title: "Sanitising Spray.",
    image: SanitisingSprayImage,
    items: [
      " Surface Hygiene Spray – Designed for cleaning and freshening surfaces. • General Use – Suitable for homes, offices, and shared spaces. • Convenient Spray Format – Easy application on compatible surfaces.",
      "Pack size includes: 250ml, 500ml, 1lt",
    ],
  },
  {
    id: 29,
    title: "Povidone Iodine 7.5% w/v",
    image: PovidoneIodineSevenPercentImage,
    items: [
      "Iodine-Based Cleansing Solution – Suitable for external cleansing purposes. • Professional & Institutional Use – Used in controlled environments. • External Use Only – Not for ingestion.",
      "Pack size includes: 100ml, 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 30,
    title: "Nail Polish Remover",
    image: NailPolishRemoverImage,
    items: [
      "Cosmetic Solvent – Used to remove nail polish from nails. • Salon & Personal Use – Suitable for beauty and nail care routines. • Fast Acting Formula – Assists efficient polish removal. • External Use Only.",
      "Pack size includes: 100ml, 250ml, 500ml, 1lt",
    ],
  },
  {
    id: 31,
    title: "Zinc Oxide Paste",
    image: ZincOxidePasteImage,
    items: [
      "Thick Protective Paste – Used for barrier and skin care purposes. • External Application – Suitable for controlled personal care use.",
      "Pack size includes: 100g, 250g, 500g",
    ],
  },
  {
    id: 32,
    title: "Sodium Hypochlorite 10% w/v",
    image: SodiumHypochloriteTenPercentImage,
    items: [
      "Chlorine-Based Solution – Used for surface cleaning and bleaching purposes. • Water & Surface Treatment Use – Suitable for controlled environments. • Industrial & Institutional Use – Not for ingestion.",
      "Pack size includes: 1lt, 5lt, 20lt",
    ],
  },
  {
    id: 33,
    title: "Food Warming Gel",
    image: FoodWarmingGelImage,
    items: [
      "Heat-Generating Gel – Designed to provide steady heat for food warming. • Catering & Hospitality Use – Suitable for buffets and food service setups. • Clean Burning – Produces minimal residue during use.",
      "Pack size includes: 200g, 500g, 1kg",
    ],
  },
  {
    id: 34,
    title: "Laundry Detergent Booster",
    image: LaundryDetergentBoosterImage,
    items: [
      "Washing Performance Enhancer – Designed to improve detergent effectiveness. • Stain & Odour Control – Supports cleaner and fresher laundry results. • Household Laundry Use – Suitable for regular washing routines.",
      "Pack size includes: 500g, 1kg, 5kg",
    ],
  },
  {
    id: 35,
    title: "Xylene",
    image: XyleneImage,
    items: [
      "Industrial Solvent – Used in laboratory, industrial, and technical applications. • Cleaning & Processing Use – Suitable for controlled professional environments. • Non-Ingestible & Professional Use Only.",
      "Pack size includes: 1lt, 5lt, 20lt",
    ],
  },
  {
    id: 36,
    title: "White Spirit (Mineral Turpentine)",
    image: WhiteSpiritImage,
    items: [
      "Solvent & Thinner – Used for thinning oil-based paints and coatings. • Cleaning Applications – Suitable for removing grease and residues. • Industrial & Household Use – For controlled environments only.",
      "Pack size includes: 1lt, 5lt, 20lt",
    ],
  },
  {
    id: 37,
    title: "Zinc Oxide Ointment",
    image: ZincOxideOintmentImage,
    items: [
      "Protective Skin Ointment – Used to form a protective barrier on the skin. • Personal Care Use – Suitable for external skin application. • Non-Medicated Use.",
      "Pack size includes: 100g, 250g, 500g",
    ],
  },
  {
    id: 38,
    title: "Surgical Spirit 90%",
    image: SurgicalSpiritNinetyPercentImage,
    items: [
      "Alcohol-Based Solution – Used for external cleaning applications. • Professional Use – Suitable for controlled environments. • External Use Only – Not for ingestion.",
      "Pack size includes: 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 39,
    title: "Acetone",
    image: AcetoneImage,
    items: [
      "Industrial Solvent – Commonly used for cleaning and degreasing applications. • Cosmetic & Technical Use – Suitable for nail care and technical environments. • Fast Evaporating – Leaves minimal residue after use. • Professional Use Recommended.",
      "Pack size includes: 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 40,
    title: "Eusol Solution",
    image: EusolSolutionImage,
    items: [
      "External Cleansing Solution – Commonly used for external surface cleansing where chlorine-based solutions are required. • General Hygiene Applications – Suitable for non-cosmetic hygiene and cleaning routines in controlled environments. • Laboratory & Educational Use – Used in instructional, laboratory, and demonstration settings involving disinfecting solutions. • General Disinfection Use – Applied for non-medical disinfection purposes on appropriate surfaces. • Industrial & Institutional Use – Suitable for technical, research, and institutional environments where cleansing solutions are required. • External & Non-Ingestible Use Only – Not intended for internal use or consumption.",
      "Pack size includes: 100ml, 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 41,
    title: "Isopropyl Alcohol",
    image: IsopropylAlcoholImage,
    items: [
      "Cleaning Alcohol – Used for surface cleaning and equipment maintenance. • Fast Evaporating – Leaves minimal residue. • Professional & Household Use – Non-consumable.",
      "Pack size includes: 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 42,
    title: "Deionized Water",
    image: DeionizedWaterImage,
    items: [
      "Purified Water – Free from dissolved ions and minerals. • Laboratory & Technical Use – Suitable for laboratory, industrial, and equipment applications. • General Utility Use – Used where mineral-free water is required. • Non-Consumable Grade – Not intended for drinking.",
      "Pack size includes: 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 43,
    title: "Denatured Ethanol",
    image: DenaturedEthanolImage,
    items: [
      "Industrial Alcohol – Used for cleaning and technical applications. • Surface Cleaning Use – Suitable for general-purpose cleaning routines. • Professional & Institutional Use – Not for consumption.",
      "Pack size includes: 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 44,
    title: "Methylated Spirit (For FoodWarming)",
    image: MethylatedSpiritForFoodWarmingImage,
    items: [
      "Fuel Alcohol – Used as a heat source for food warming equipment. • Catering & Hospitality Use – Suitable for chafing dishes and burners. • Non-Consumable Alcohol – Not intended for drinking.",
      "Pack size includes: 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 45,
    title: "Lugols Of Iodine",
    image: LugolsOfIodineImage,
    items: [
      "Laboratory & Educational Use – Commonly used in scientific laboratories and learning institutions as a reagent, particularly for starch testing and microscopy demonstrations. • External Skin Cleansing Use – Suitable for external surface cleansing where iodine-based solutions are required, when used appropriately. • General Disinfection Applications – Used for non-medical disinfection purposes in controlled environments. • Water Treatment Applications – Applied in non-medical and non-consumable water treatment setups, such as educational or emergency preparedness demonstrations. • Industrial & Technical Use – Suitable for various technical, research, and instructional applications requiring an iodine solution. • External & Non-Ingestible Use Only – Not intended for internal consumption.",
      "Pack size includes: 30ml, 50ml, 100ml, 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 46,
    title: "Absolute Methanol",
    image: AbsoluteMethanolImage,
    items: [
      "High-Purity Solvent – Used in laboratory and industrial environments. • Technical & Research Use – Suitable for controlled professional applications. • Non-Ingestible & Hazardous Material.",
      "Pack size includes: 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 47,
    title: "Epsom Salt",
    image: EpsomSaltImage,
    items: [
      "Magnesium Sulphate Crystals – Commonly used for household and personal care purposes. • Bath & Soaking Use – Suitable for relaxation and general wellness routines. • General Purpose Use – External applications only.",
      "Pack size includes: 500g, 1kg, 5kg",
    ],
  },
];

const transitionOne = { duration: 0.2, ease: [0.6, 0.05, 0, 0.9] };

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


const headParentAnime = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

//child single animation
const headSingleAnime = {
    hidden : {
      opacity: 0, rotateX: 75, rotateY: 10, rotateZ: -9,
    },
    show : {
      opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 ,
       
    },           
}

const Products = () => {
  const [expanded, setExpanded] = useState(0);
  return (
    <>
      <AnimatePresence>
        <Layout>
          <Seo
            title="Products"
            description="Explore our product catalogue and usage featuring a variety of pack sizes from 50ml to 20Lt."
            keywords="Chemical Distributers and Manufacturers in Kenya, Hand sanitizer Kenya, Surface disinfectant Kenya, Detergents supplier Kenya"
          />
          <ProductContainer
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0, 0.9],
            }}
          >
            <ProductsWrapper>
              
              <ProductsWrapperInner>
                <ProductsInstructions>
              
              <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"                
                    >
                        <motion.div                   
                        variants={headSingleAnime}
                        transition={transition}
                        >Our products</motion.div> 

                     <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >and usage</motion.div>                 
                    </motion.h1>         
                </ProductsInstructions>
                <ProductsDropdown>
                  {categoriesAndList.map((details, index) => (
                    <CategoriesAccordion
                      key={index}
                      details={details}
                      expanded={expanded}
                      setExpanded={setExpanded}
                    />
                  ))}
                </ProductsDropdown>
              </ProductsWrapperInner>
            </ProductsWrapper>
            <Footer />
          </ProductContainer>
        </Layout>
      </AnimatePresence>
    </>
  );
};

const CategoriesAccordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  return (
    <>
      <CategoriesHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
      >
        <CategoryTitle><h3>{details.title}</h3></CategoryTitle>
        <CategoryIcon>
          <motion.span
            animate={{ rotate: isOpen ? 0 : 45, x: 3.5 }}
            transition={transitionOne}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -45, x: -3.5 }}
            transition={transitionOne}
          ></motion.span>
        </CategoryIcon>
      </CategoriesHeader>
      <CategoriesList
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0, 0.9] }}
      >
         {isOpen && (
          <ProductDetailsContainer>
            <ProductImage>
              <img src={details.image} alt={details.title} />
            </ProductImage>
            <ProductUsage>
              {details.items.map((item, index) => (
                <span key={index}>
                  <h3>&#8226; {item}</h3>
                </span>
              ))}
            </ProductUsage>
          </ProductDetailsContainer>
        )}
      </CategoriesList>
    </>
  );
};

export default Products;