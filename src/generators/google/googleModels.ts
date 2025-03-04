export const enum GoogleTextGenModel {
	GEMINI_2_0_FLASH = "gemini-2.0-flash",
	GEMINI_2_0_FLASH_LITE = "gemini-2.0-flash-lite",
	GEMINI_2_0_FLASH_EXP = "gemini-2.0-flash-exp",
	GEMINI_1_5_PRO_EXP = "learnlm-1.5-pro-experimental",
	GEMINI_1_5_FLASH = "gemini-1.5-flash",
	GEMINI_1_5_PRO = "gemini-1.5-pro",
}

export const googleTextGenModels: Record<GoogleTextGenModel, string> = {
	[GoogleTextGenModel.GEMINI_2_0_FLASH]: "Gemini 2.0 Flash",
	[GoogleTextGenModel.GEMINI_2_0_FLASH_LITE]: "Gemini 2.0 Flash Lite",
	[GoogleTextGenModel.GEMINI_2_0_FLASH_EXP]: "Gemini 2.0 Flash Exp",
	[GoogleTextGenModel.GEMINI_1_5_PRO_EXP]: "Gemini 1.5 Pro Experimental",
	[GoogleTextGenModel.GEMINI_1_5_FLASH]: "Gemini 1.5 Flash",
	[GoogleTextGenModel.GEMINI_1_5_PRO]: "Gemini 1.5 Pro",
};

export const enum GoogleEmbeddingModel {
	TEXT_EMBEDDING_004 = "text-embedding-004",
}

export const googleEmbeddingModels: Record<GoogleEmbeddingModel, string> = {
	[GoogleEmbeddingModel.TEXT_EMBEDDING_004]: "Text Embedding 004",
};
