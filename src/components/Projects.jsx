import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  ArrowUpRight,
  Sparkles,
  Loader2,
} from "lucide-react";

// Reusable Optimized Image Component with a Loader & Smooth Fade-in
const LazyImage = ({ src, alt, className, containerClassName }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${containerClassName || ""}`}>
      {/* Loading Spinner / Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 backdrop-blur-sm z-10 transition-opacity duration-300">
          <Loader2 className="w-8 h-8 text-[#E5C158] animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className={`${className} transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Tranqulity Residence",
      category: "Residential Architecture",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_800/v1757656423/PDS_TheFirstByDSR__DSC2810_hrrnv9.jpg",
      images: [
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656427/PDS_TheFirstByDSR__DSC2874_i93rly.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656468/PDS_TheFirstByDSR2__DSC3554-1_xf5pn7.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656466/PDS_TheFirstByDSR2__DSC3513-1_asal04.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656463/PDS_TheFirstByDSR2__DSC3475_zfgf0s.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656461/PDS_TheFirstByDSR2__DSC3412_Panorama-1_pmtw5t.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656459/PDS_TheFirstByDSR2__DSC3366-1_zezxu0.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656455/PDS_TheFirstByDSR2__DSC3313-1_nraqng.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656452/PDS_TheFirstByDSR2__DSC3311-1_a3qwcd.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656451/PDS_TheFirstByDSR2__DSC3284_ngnwum.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656449/PDS_TheFirstByDSR2__DSC3237_hj8qlo.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656442/PDS_TheFirstByDSR2__DSC3188_krzbhe.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656440/PDS_TheFirstByDSR2__DSC3085-1_bzxvdj.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656438/PDS_TheFirstByDSR2__DSC3072_tdgvch.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656436/PDS_TheFirstByDSR2__DSC3043-1_fhk7gk.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656434/PDS_TheFirstByDSR2__DSC3036-1_ywuihx.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656433/PDS_TheFirstByDSR2__DSC3015_lpcfg5.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656430/PDS_TheFirstByDSR2__DSC2934_axfiqx.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656428/PDS_TheFirstByDSR2__DSC2870-1_cufjtx.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656427/PDS_TheFirstByDSR__DSC2874_i93rly.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656425/PDS_TheFirstByDSR__DSC2874_1_x67x6d.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656423/PDS_TheFirstByDSR__DSC2810_hrrnv9.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656421/PDS_TheFirstByDSR__DSC2752_Y-1_cvtxhi.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656419/PDS_TheFirstByDSR__DSC2743_msswwc.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656417/PDS_TheFirstByDSR__DSC2706_flq2d1.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656415/PDS_TheFirstByDSR__DSC2656-1_bwkkgs.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656413/PDS_TheFirstByDSR__DSC2640_tcmuwc.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656412/PDS_TheFirstByDSR__DSC2614_fkl9ao.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656410/PDS_TheFirstByDSR__DSC2603-1_i22l0m.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656408/PDS_TheFirstByDSR__DSC2594_xb9wjo.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656407/PDS_TheFirstByDSR__DSC2559_Lights_adtqrm.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656405/PDS_TheFirstByDSR__DSC2549_light-on-1_jgkfne.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656403/PDS_TheFirstByDSR__DSC2543_xkh4l8.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656401/PDS_TheFirstByDSR__DSC2504-1_lgofjr.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656399/PDS_TheFirstByDSR__DSC2394-1_ed39rn.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656396/PDS_TheFirstByDSR__DSC2241-1_zqppj6.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656395/PDS_TheFirstByDSR__DSC2207-Recovered_dtcgk8.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656393/PDS_TheFirstByDSR__DSC2128_lsw9mv.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757656393/PDS_TheFirstByDSR__DSC2102-1_dgbfwl.jpg",
      ],
    },
    {
      id: 2,
      title: "Mumbai Office",
      category: "Commercial Interior",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_800/v1757669758/IMG-20250811-WA0016_cgllti.jpg",
      images: [
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669758/IMG-20250811-WA0016_cgllti.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669701/IMG-20250811-WA0007_1_dumnjd.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669706/IMG-20250811-WA0007_ybtfdj.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669711/IMG-20250811-WA0008_tdjr05.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669715/IMG-20250811-WA0009_1_khosox.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669719/IMG-20250811-WA0009_r8l2jy.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669722/IMG-20250811-WA0010_1_dikknw.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669727/IMG-20250811-WA0010_twssp1.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669730/IMG-20250811-WA0011_1_j7vy45.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669733/IMG-20250811-WA0011_impyqq.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669737/IMG-20250811-WA0012_1_gd1aom.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669742/IMG-20250811-WA0012_mulxnn.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669746/IMG-20250811-WA0013_kvjnay.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669750/IMG-20250811-WA0014_s11w2j.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669754/IMG-20250811-WA0015_ruda2r.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669761/IMG-20250811-WA0017_sq6s4i.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669765/IMG-20250811-WA0018_s2yezo.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669769/IMG-20250811-WA0019_kskgvz.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669773/WhatsApp-Image-2025-08-13-at-19.14.29_e89f81f0_xb5csy.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669777/WhatsApp-Image-2025-08-13-at-19.14.31_09cbae21_1_fplo68.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669781/WhatsApp-Image-2025-08-13-at-19.14.31_09cbae21_lb2row.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669784/WhatsApp-Image-2025-08-13-at-19.14.33_e49a4412_e7e9dv.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669788/WhatsApp-Image-2025-08-13-at-19.14.35_2cafef2c_qgysvt.jpg",
      ],
    },
    {
      id: 3,
      title: "Aidhu",
      category: "Modern Living",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_800/v1757669668/HYD-Aaidu-4-1536x1024_eraptp.jpg",
      images: [
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669668/HYD-Aaidu-4-1536x1024_eraptp.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669696/HYD-Aaidu-12-1536x1110_cxvhya.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669692/HYD-Aaidu-11-scaled_cnywq6.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669689/HYD-Aaidu-10-scaled_p6yz9m.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669685/HYD-Aaidu-9-1536x1024_ufek6h.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669682/HYD-Aaidu-8-scaled_khk38e.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669678/HYD-Aaidu-7-scaled_i3xayt.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669675/HYD-Aaidu-6-scaled_dcizsd.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669672/HYD-Aaidu-5-scaled_ww4ird.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669663/HYD-Aaidu-3-683x1024_shz2oy.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669656/AID08603_wwf2dh.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669652/AID08439_kid1gu.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669649/AID08323_yg6ibd.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669644/AID08290_tkdtqx.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669638/AID08284_jytadg.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669635/AID08278_cuvb2d.jpg",
      ],
    },
    {
      id: 4,
      title: "NOHO",
      category: "Urban Hospitality",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_800/v1757669468/NOH01871_1_eanjbo.jpg",
      images: [
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669468/NOH01871_1_eanjbo.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669532/NOHO-20-scaled_ejsevj.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669529/NOHO-18-scaled_bhcfzh.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669526/NOHO-17-scaled_l30asd.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669522/NOHO-16-scaled_n5bm2w.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669518/NOHO-9-scaled_rbi61h.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669515/NOHO-8-1387x2048_oop2za.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669511/NOHO-6-1536x1024_brjsfq.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669508/NOHO-5-1536x1024_ikd5bh.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669505/NOHO-4-1536x2048_m4jxze.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669501/NOHO-3-scaled_fdorth.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669498/NOHO-2-1447x2048_ifhdci.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669495/NOH02097_1_uc5lng.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669491/NOH02071_1_kyvai4.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669490/NOH02071_1_1_rhvb9q.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669481/NOH01895_biawya.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669477/NOH01895_1_glimmi.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669474/NOH01886_hkhtcz.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669471/NOH01877_gpimmp.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669465/NOH01853_zk685h.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669460/NOH01847_ved0st.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757669458/HYD-2-scaled_lu3qtu.jpg",
      ],
    },
    {
      id: 5,
      title: "Terrazzo",
      category: "Contemporary Space",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_800/v1757672720/WhatsApp_Image_2025-09-12_at_15.52.29_f1da85fe_qsih8z.jpg",
      images: [
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672720/WhatsApp_Image_2025-09-12_at_15.52.29_f1da85fe_qsih8z.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672720/WhatsApp_Image_2025-09-12_at_15.52.29_41023b3a_hqdgys.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672722/NOH02002_hgvpku.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672720/NOH01987_kr3br0.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672720/WhatsApp_Image_2025-09-12_at_15.52.30_e7d15b43_xyfx18.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672719/WhatsApp_Image_2025-09-12_at_15.52.31_a9c333a8_twzyit.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672719/WhatsApp_Image_2025-09-12_at_15.52.30_f343e7b8_vabkzt.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672719/WhatsApp_Image_2025-09-12_at_15.52.31_20a144b5_ol70xl.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672719/WhatsApp_Image_2025-09-12_at_15.52.31_af4f50eb_xq0qnk.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757672719/WhatsApp_Image_2025-09-12_at_15.52.32_4e905c29_c3mejs.jpg",
      ],
    },
    {
      id: 6,
      title: "Tranquility",
      category: "Luxury Villa",
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_800/v1757674161/Untitled_design_vunmgf.png",
      images: [
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757674161/Untitled_design_vunmgf.png",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673200/PDS_JupallyRameshwarRao__DSC3943_ahsdjg.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673202/PDS_JupallyRameshwarRao__DSC3966_bu4xss.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673211/PDS_JupallyRameshwarRao__DSC4106_lrfucr.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673210/PDS_JupallyRameshwarRao__DSC4083_zk0hsy.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673207/PDS_JupallyRameshwarRao__DSC4070_qf4ohs.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673207/PDS_JupallyRameshwarRao__DSC4041_ce4jul.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673206/PDS_JupallyRameshwarRao__DSC4028_h5km6x.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673205/PDS_JupallyRameshwarRao__DSC4016_wfaajq.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673198/PDS_JupallyRameshwarRao__DSC3851_faftjs.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673197/PDS_JupallyRameshwarRao__DSC3846_fufngt.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673196/PDS_JupallyRameshwarRao__DSC3825_yxf9p0.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673195/PDS_JupallyRameshwarRao__DSC3814_tm1lwc.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673195/PDS_JupallyRameshwarRao__DSC3803_hxesde.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673194/PDS_JupallyRameshwarRao__DSC3777_tsfdzk.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673193/PDS_JupallyRameshwarRao__DSC3772_hiqope.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673192/PDS_JupallyRameshwarRao__DSC3751_vo5rtv.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673191/PDS_JupallyRameshwarRao__DSC3751_1_fxhp0c.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673190/PDS_JupallyRameshwarRao__DSC3732_gaf3kl.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673190/PDS_JupallyRameshwarRao__DSC3710_qm8atm.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673190/PDS_JupallyRameshwarRao__DSC3715_lx56ih.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673189/PDS_JupallyRameshwarRao__DSC3704_n2w1mk.jpg",
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1200/v1757673189/PDS_JupallyRameshwarRao__DSC3671_st4kmy.jpg",
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
    setZoom(1);
    setAutoPlay(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setAutoPlay(false);
    setZoom(1);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // Preload adjacent images for instant next/prev browsing
  useEffect(() => {
    if (selectedProject) {
      const nextIdx = (currentImage + 1) % selectedProject.images.length;
      const prevIdx = (currentImage - 1 + selectedProject.images.length) % selectedProject.images.length;
      
      const imgNext = new Image();
      imgNext.src = selectedProject.images[nextIdx];
      const imgPrev = new Image();
      imgPrev.src = selectedProject.images[prevIdx];
    }
  }, [currentImage, selectedProject]);

  // Auto-play feature
  useEffect(() => {
    if (autoPlay && selectedProject) {
      const interval = setInterval(nextImage, 3000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, selectedProject]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-black bg-cover bg-center bg-fixed text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url('https://res.cloudinary.com/dzwxkhkvi/image/upload/f_auto,q_auto,w_1600/v1755932707/download_8_yx8jwa.jpg')",
      }}
    >
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg mb-2">
            <Sparkles className="w-3 h-3 text-[#E5C158]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E5C158]">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6 text-white tracking-wide">
            Our Projects
          </h2>
          <div className="w-20 h-0.5 bg-neutral-700 mx-auto mb-6 rounded-full" />
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Explore our portfolio of exceptional design projects that showcase
            our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl bg-neutral-900 border border-white/10"
              onClick={() => openModal(project)}
            >
              <LazyImage
                src={project.image}
                alt={project.title}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg pointer-events-auto">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold font-playfair text-white tracking-wide">
                      {project.title}
                    </h3>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white/90 group-hover:text-white transition-colors">
                      View Project
                      <span className="w-6 h-px bg-white/40 group-hover:w-10 group-hover:bg-white transition-all duration-300" />
                    </span>
                    <span className="text-xs text-neutral-400">
                      {project.images.length} Photos
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup Viewer */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] flex flex-col items-center justify-between p-4 sm:p-8"
            >
              {/* Top Bar info & Close */}
              <div className="w-full max-w-7xl flex items-center justify-between z-20">
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-medium font-playfair">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Image {currentImage + 1} of {selectedProject.images.length}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                  aria-label="Close Modal"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Main Image View Container */}
              <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-4 overflow-hidden">
                <motion.div
                  key={selectedProject.images[currentImage]}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: zoom }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center h-full w-full"
                >
                  <LazyImage
                    src={selectedProject.images[currentImage]}
                    alt="Project preview"
                    containerClassName="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-xl flex items-center justify-center"
                    className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl select-none"
                  />
                </motion.div>

                {/* Left/Right Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 text-white bg-black/40 hover:bg-black/70 p-3 sm:p-4 rounded-full backdrop-blur-md border border-white/10 transition-all z-20"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 text-white bg-black/40 hover:bg-black/70 p-3 sm:p-4 rounded-full backdrop-blur-md border border-white/10 transition-all z-20"
                  aria-label="Next Image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Bottom Interactive Controls */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full z-20">
                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  className={`p-2.5 rounded-full transition-colors text-white ${
                    autoPlay ? "bg-white/20 text-white" : "hover:bg-white/10"
                  }`}
                  title={autoPlay ? "Pause Slideshow" : "Play Slideshow"}
                >
                  {autoPlay ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <div className="w-px h-5 bg-white/20 mx-1" />
                <button
                  onClick={() => setZoom((z) => Math.min(z + 0.25, 2.5))}
                  className="p-2.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
                  className="p-2.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut size={20} />
                </button>
                <div className="w-px h-5 bg-white/20 mx-1" />
                <button
                  onClick={toggleFullscreen}
                  className="p-2.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  title="Toggle Fullscreen"
                >
                  {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Projects;