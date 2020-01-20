export declare const enum GameVersion {
    JP_1_0 = 0,
    PAL_1_0 = 1,
    USA_1_0 = 2
}
export declare const enum AddressType {
    SHARED_COLLECTABLES = "DK64:shared_collectables",
    MENU_FLAGS = "DK64:menu_flags",
    ER_COPY_BASE = "DK64:er_copy_base",
    ER_FILE_MAP = "DK64:er_file_map",
    CHARACTER = "DK64:character",
    KONG_BASE = "DK64:kong_base",
    PLYR_PTR = "DK64:plyr_ptr",
    RT_ACTOR_ARRAY_PTR = "DK64:rt_actor_array_ptr",
    RT_ACTOR_COUNT_PTR = "Dk64:rt_actor_count_ptr",
    RT_VOXEL_ARRAY_PTR = "DK64:rt_voxel_array_ptr",
    RT_VOXEL_COUNT_PTR = "DK64:rt_voxel_count_ptr",
    RT_CUR_PROFILE = "DK64:rt_current_profile",
    RT_GAME_MODE = "DK64:rt_game_mode",
    RT_CUR_MAP = "DK64:rt_cur_map",
    RT_CUR_EXIT = "DK64:rt_cur_exit",
    RT_PARENT_MAP = "DK64:rt_parent_map",
    RT_PARENT_EXIT = "DK64:rt_parent_exit",
    RT_DEST_MAP = "DK64:rt_dest_map",
    RT_DEST_EXIT = "DK64:rt_dest_exit",
    RT_MAP_STATE = "DK64:rt_map_state",
    RT_CUR_CUTSCENE = "DK64:rt_cur_cutscene",
    RT_CUR_CUTSCENE_TYPE = "DK64:rt_cur_cutscene_type",
    RT_CUR_CUTSCENE_TYPE_MAP = "DK64:rt_cur_cutscene_type_map",
    RT_CUR_CUTSCENE_TYPE_KONG = "DK64:rt_cur_cutscene_type_kong",
    RT_NUMBER_OF_CUTSCENES = "DK64:rt_number_of_cutscenes",
    RT_CUTSCENE_ACTIVE = "DK64:rt_cutscene_active",
    RT_CUTSCENE_TIMER = "DK64:rt_cutscene_timer",
    RT_CUTSCENE_TO_PLAY_NEXT_MAP = "DK64:rt_cutscene_to_play_next_map",
    RT_CUTSCENE_WILL_PLAY_NEXT_MAP = "DK64:rt_cutscene_will_play_next_map"
}
export declare enum GameModeType {
    NINTENDO_LOGO = 0,
    OPENING_CUTSCENE = 1,
    DK_RAP = 2,
    DK_TV = 3,
    UNKNOWN_4 = 4,
    MAIN_MENU = 5,
    ADVENTURE = 6,
    QUIT_GAME = 7,
    UNKNOWN_8 = 8,
    GAME_OVER = 9,
    END_SEQUENCE = 10,
    DK_THEATRE = 11,
    MYSTERY_MENU_MINIGAME = 12,
    SNIDES_BONUS_GAME = 13,
    END_SEQUENCE_DK_THEATRE = 14
}
export declare enum MapType {
    TEST_MAP = 0,
    FUNKYS_STORE = 1,
    DK_ARCADE = 2,
    CRANKYS_LAB = 5,
    JUNGLE_JAPES = 7,
    HIDEOUT_HELM = 17,
    FRANTIC_FACTORY = 26,
    GLOOMY_GALLEON = 30,
    DK_ISLES = 34,
    ANGRY_AZTEC = 38,
    NINTENDO_LOGO = 40,
    TROFF_N_SCOFF = 42,
    FUNGI_FOREST = 48,
    CRYSTAL_CAVES = 72,
    DK_RAP = 76,
    MAIN_MENU = 80,
    TITLE_SCREEN = 81,
    CREEPY_CASTLE = 87
}
export declare enum ActorType {
    DK = 2,
    DIDDY = 3,
    LANKY = 4,
    TINY = 5,
    CHUNKY = 6,
    KRUSHA = 7,
    RAMBI = 8,
    ENGUARDE = 9,
    BONUS_BARREL = 28,
    BOSS_KEY = 72,
    BP_DIDDY = 75,
    BP_CHUNKY = 76,
    BP_LANKY = 77,
    BP_DK = 78,
    BP_TINY = 79,
    BALLOON_DIDDY = 91,
    BALLOON_CHUNKY = 111,
    BALLOON_TINY = 112,
    BALLOON_LANKY = 113,
    BALLOON_DK = 114,
    RAINBOW_COIN_PATCH = 139,
    RAINBOW_COIN = 140
}
export declare enum VoxelType {
    SINGLE_CB_DIDDY = 10,
    SINGLE_CB_DK = 13,
    SINGLE_CB_TINY = 22,
    BC_TINY = 28,
    BC_DK = 29,
    SINGLE_CB_LANKY = 30,
    SINGLE_CB_CHUNKY = 31,
    BC_LANKY = 35,
    BC_DIDDY = 36,
    BC_CHUNKY = 39,
    BUNCH_CB_DK = 43,
    WD_TINY = 103,
    FACTORY_BREAKABLE_MG = 114,
    GOLDEN_BANANA = 116,
    JAPES_BREAKABLE_HUT = 129,
    GREEN_SSS_CHUNKY = 146,
    GREEN_SSS_DIDDY = 147,
    GREEN_SSS_DK = 148,
    GREEN_SSS_LANKY = 149,
    GREEN_SSS_TINY = 150,
    BBP = 151,
    RAINBOW_COIN = 183,
    BP_TINY = 221,
    BP_DK = 222,
    BP_CHUNKY = 223,
    BP_DIDDY = 224,
    BP_LANKY = 225,
    DK_COIN = 236,
    WD_LANKY = 239,
    WD_DK = 240,
    WD_CHUNKY = 241,
    WD_DIDDY = 242,
    GG_BREAKABLE_GATE = 261,
    PINEAPPLE_SWITCH = 293,
    PEANUT_SWITCH = 294,
    FEATHER_SWITCH = 295,
    GRAPE_SWITCH = 296,
    COCONUT_SWITCH = 297,
    BOSS_KEY = 316,
    RED_SSS_CHUNKY = 357,
    RED_SSS_DIDDY = 358,
    RED_SSS_DK = 359,
    RED_SSS_LANKY = 360,
    RED_SSS_TINY = 361,
    BLUE_SSS_CHUNKY = 362,
    BLUE_SSS_DIDDY = 363,
    BLUE_SSS_DK = 364,
    BLUE_SSS_LANKY = 365,
    BLUE_SSS_TINY = 366,
    FUNGI_BREAKABLE_DOOR = 381,
    BUNCH_CB_LANKY = 517,
    BUNCH_CB_CHUNKY = 518,
    BUNCH_CB_TINY = 519,
    BUNCH_CB_DIDDY = 520,
    WP_5 = 528,
    WP_4 = 529,
    WP_3 = 530,
    WP_2 = 531,
    WP_1 = 532,
    RAREWARE_GB = 648
}
export declare enum KongType {
    DK = 0,
    DIDDY = 1,
    LANKY = 2,
    TINY = 3,
    CHUNKY = 4,
    KRUSHA = 5
}
export declare enum KongDataType {
    MOVES = 0,
    SIM_SLAM = 1,
    WEAPON = 2,
    AMMO_BELT = 3,
    INSTRUMENT = 4,
    COINS = 6,
    LIVES = 8,
    CB_BASE = 10
}
export declare enum ProfileType {
    A = 0,
    B = 1,
    C = 2
}
export declare enum InventoryType {
    STANDARD_AMMO = 0,
    HOMING_AMMO = 2,
    ORANGES = 4,
    CRYSTALS = 6,
    FILM = 8,
    HEALTH = 11,
    MELONS = 12
}