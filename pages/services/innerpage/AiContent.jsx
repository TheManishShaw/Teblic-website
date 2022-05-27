import React from 'react'
import InnerHeading from '../elements/InnerHeading';
import Desc from '../elements/Desc';
import ContentLink from '../elements/ContentLink';

const content = [
                    { id: 1, desc: "Over the last half a decade, artificial intelligence has become an integral part of our routine without us even realising it. AI increased our productivity helping us streamline our energies and efforts in more crucial tasks thus optimizing efficiency.", },
                    { id: 2, desc: "Be it face recognition on our smartphones or having natural language processing (nlp) tools like alexa play our favourite chartbusters all-day or as simple as our biometric machines recording attendance, we are surrounded by ai-enabled products.", }
                ]; 
const outercontent = [
                        { id: 1, desc: "Being very professional is an integral part of us. at tecblic, we develop a deep understanding and identify a feasible solution. Classify the data sources to realise potential accuracy. data at hand is analysed with graphical representation and outliers are detected and separated from the system making it cleaner to use.", },
                        { id: 2, desc: "Data is processed several times based on parameters provided developing an acquired understanding by the build. Results are then evaluated and irregularities are cleaned before processes are standardized and model is deployed to live server. after deployment, tecblic aims at maintaining its performance and bring about improvements that are continuous and sustainable.", },
                        { id: 2, desc: "Machine learning is being widely explored today. Be it tagging suggestions for a friend on facebook or instagram or product recommendations on e-commerce websites or as regular as a spam filter on your email, machine learning algorithms play a vital role.", },
                    ];

const outer = [
                { id: 1, desc: "Currently, vehicles are connected to internet on-the-go and even chauffeur-less cars are debuting in the world market leaning entirely on ai-ml technologies. siri, alexa, cortana and google assistant are a few prime examples of machines learning to understand human languages.",  },
                { id: 2, desc: " At Tecblic, we are well equipped for crafting ml models that are trained to analyse data, predicts future occurrences like trend prediction,sales forecast, weather update and whatsapp integrated chatbots etc. our systems can function as desired.",  },
                { id: 3,desc: " Ever thought how google translation gives you prompt and accurate language translations? neural network provides user with data back propagation mechanism hence training the system for desired output. First the data is introduced to the system to train it. ones the system has evolved, the data feeding is paused and the system is adopted for sandboxing before pushing into live environment.",  },
                { id: 4, desc: " Were you slapped with an e-challan for jumping the traffic signals? the science of optical character recognition (ocr) has gained momentum in the recent times. also, several banks have started to store vital credentials in ocr format serving customers with optimum security.",  },
                { id: 5,desc: "With tecblic’s innovative technological approach, converting printed paper document into machine readable text or image documents is effortless. Be it in printed, handwritten or typed formats, tecblicans are hands-on with providing significant solutions based on optical character recognition (ocr).",  },
                { id: 6, desc: "Looking for a secure ai integration to protect your user data? our cutting-edge comprehensive ai tools are capable to sense and shield against potential credit/debit card fraud, spam call protection, identity theft, and more, infusing increased reliability in your clientele.",  },
                { id: 7, desc: " We create ai/ml enabled nlp tools helping effective communication making smart search faster with a personalised voice assistant that understand commands in user-preferred languages of speech. Our passion for robotic process automation (rpa) and erp integrated bots speaks for itself, like literally.",  },
                { id: 8, desc: "Do you wear a fitness band or you live in a smart home? internet of things (iot) is the set of tools that touched lives and made it near to perfect. Now we are connected to our homes even if we are away. Smart lighting solutions lit up the lights as you cross sensors. iot has penetrated our lives beyond our realizations.", },
            ];

const AiContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10 mb-10">
      <InnerHeading
        heading1=" EXPLORE POSSIBILITIES WITH ARTIFICIAL INTELLIGENCE"
        heading2=""
      />
      <div className="grid gap-12 row-gap-5 lg:grid-cols-2 items-center">
        <div className=" ">
          {content.map((item) => (
            <Desc key={item.id} desc={item.desc} />
          ))}
          <h3 className="text-2xl font-bold text-black mb-2">
            So how exactly AI works?
          </h3>
          <Desc
            desc=" Simply put, ai is the simulation of natural intelligence. it is
            trained to take and act on certain specific instructions. How it can
            be trained? exactly like the humans. the systems learn from large
            amount of labelled and unlabelled data and categorize it as per the
            parameters inserted."
          />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2  text-center">
          <img
            className="object-cover object-center rounded"
            alt="Odoo"
            src="/assets/img/ai/ai2.png"
          />
        </div>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Odoo"
            src="/assets/img/ai/ai3.png"
          />
        </div>
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pl-14 md:pl-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          <h3 className="text-2xl font-bold text-black mb-2">
            So how Tecblic does it?
          </h3>
          {outercontent.map((item) => (
            <Desc key={item.id} desc={item.desc} />
          ))}
        </div>
      </div>
      {outer.map((item) => (
        <Desc key={item.id} desc={item.desc} />
      ))}
      <ContentLink
        href="/home/HomePage"
        text="Thinking Of Taking Your Tech-Driven Business To Next Level? Your Search Surely Ends With Tecblic India."
      />
    </div>
  );
}

export default AiContent;