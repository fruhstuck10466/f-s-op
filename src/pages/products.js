import React, { useState } from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

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
} from "../styles/productStyles";

const categoriesAndList = [
  {
    id: 0,
    title: "Povidone Iodine 10% w/v.",
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
    items: [
      "Contains Iodine 2.5% w/v, KI 2.5 w/v.",
      "An antiseptic solution that contains iodine and potassium iodide, and used on minor wounds, cuts and scrapes to aid their healing process.",
      "Disinfectant - Tincture of Iodine is often found in emergency survival kits, used both to disinfect wounds and to sanitise surface water for drinking.",
      "Medical Procedures - Tincture of Iodine is frequently used in hospitals as a disinfectant because it can destroy both bacteria and viruses. It is also used in many medical procedure such as colonoscopies and some x-ray exams",
      "Please note that it should not be used on newborn infants, large open wounds, or for long periods",
      "Pack size includes 30ml, 50ml, 100ml, 200ml, 250ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 2,
    title: "FAHOLO Antiseptic.",
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
    items: [
      "Farm Liniment is a type of topical medication that is typically used to relieve joint pain or muscle tension. Farm Liniment is often applied with friction to increase blood circulation to an injury or for sore, stiff muscles.",
      "Pack size includes 100ml, 250ml, 300ml, 500ml, 1lt, 5lt",
    ],
  },
  {
    id: 8,
    title: "Hydrogen Peroxide 6% & 30%.",
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
    items: [
      "Preventing Infection - Hand Washing Gel is designed to kill germs and bacteria, which can help prevent the spread of illnesses",
      "Pack size includes 500ml, 1lt, 3lt, 5lt, 20lt",
    ],
  },
  {
    id: 17,
    title: "Emulsifying Ointment.",
    items: [
      "A type of moisturizer used to treat dry skin conditions such as eczema and dermatitis, can be used as a:",
      "Moisturizer - Emulsifying Ointment is used to moisturize very dry skin, such as in eczema or dermatitis. It leaves a thin layer of oil on the surface of the skin that stops water from evaporating, resulting in a soothing, softening, and moisturizing effect",
      "Pack size includes 100gm, 250gm, 500gm",
    ],
  },
  {
    id: 18,
    title: "Pure Glycerine BP.",
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
    items: [
      "Cleaning - Multipurpose liquid soap can be used for light cleaning for wooden tables and other furniture, for mopping the floors, dishwashing, or even clothes. It can also be used as a grill and tap cleaner to cut grease/oil/dirt build up. ",
      "Pack size includes 5lt, 20lt",
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
        {details.items.map((items, index) => (
          <span key={index}><h4>&#8226; {items}</h4></span>
        ))}
      </CategoriesList>
    </>
  );
};

export default Products;