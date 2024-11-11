/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Renderer.WebGL.Shaders
 */

module.exports = {

    AddBlendFrag: require('./AddBlend-frag.js'),
    ApplyLighting: require('./ApplyLighting-glsl.js'),
    ApplyTint: require('./ApplyTint-glsl.js'),
    BitmapMaskFrag: require('./BitmapMask-frag.js'),
    BitmapMaskVert: require('./BitmapMask-vert.js'),
    BoundedSampler: require('./BoundedSampler-glsl.js'),
    ColorMatrixFrag: require('./ColorMatrix-frag.js'),
    CopyFrag: require('./Copy-frag.js'),
    DefineBlockyTexCoord: require('./DefineBlockyTexCoord-glsl.js'),
    DefineLights: require('./DefineLights-glsl.js'),
    DefineTexCoordFrameClamp: require('./DefineTexCoordFrameClamp-glsl.js'),
    FXBarrelFrag: require('./FXBarrel-frag.js'),
    FXBloomFrag: require('./FXBloom-frag.js'),
    FXBlurHighFrag: require('./FXBlurHigh-frag.js'),
    FXBlurLowFrag: require('./FXBlurLow-frag.js'),
    FXBlurMedFrag: require('./FXBlurMed-frag.js'),
    FXBokehFrag: require('./FXBokeh-frag.js'),
    FXCircleFrag: require('./FXCircle-frag.js'),
    FXColorMatrixFrag: require('./FXColorMatrix-frag.js'),
    FXDisplacementFrag: require('./FXDisplacement-frag.js'),
    FXGlowFrag: require('./FXGlow-frag.js'),
    FXGradientFrag: require('./FXGradient-frag.js'),
    FXMaskFrag: require('./FXMask-frag.js'),
    FXPixelateFrag: require('./FXPixelate-frag.js'),
    FXShadowFrag: require('./FXShadow-frag.js'),
    FXShineFrag: require('./FXShine-frag.js'),
    FXThresholdFrag: require('./FXThreshold-frag.js'),
    FXVignetteFrag: require('./FXVignette-frag.js'),
    FXWipeFrag: require('./FXWipe-frag.js'),
    FilterBlendFrag: require('./FilterBlend-frag.js'),
    FlatFrag: require('./Flat-frag.js'),
    FlatVert: require('./Flat-vert.js'),
    GetNormalFromMap: require('./GetNormalFromMap-glsl.js'),
    GetTexRes: require('./GetTexRes-glsl.js'),
    GetTexture: require('./GetTexture-glsl.js'),
    LightFrag: require('./Light-frag.js'),
    LinearBlendFrag: require('./LinearBlend-frag.js'),
    MeshFrag: require('./Mesh-frag.js'),
    MeshVert: require('./Mesh-vert.js'),
    MobileFrag: require('./Mobile-frag.js'),
    MobileVert: require('./Mobile-vert.js'),
    MultiFrag: require('./Multi-frag.js'),
    MultiVert: require('./Multi-vert.js'),
    OutInverseRotation: require('./OutInverseRotation-glsl.js'),
    PointLightFrag: require('./PointLight-frag.js'),
    PointLightVert: require('./PointLight-vert.js'),
    PostFXFrag: require('./PostFX-frag.js'),
    QuadVert: require('./Quad-vert.js'),
    ShaderQuadFrag: require('./ShaderQuad-frag.js'),
    ShaderQuadVert: require('./ShaderQuad-vert.js'),
    SimpleTextureVert: require('./SimpleTexture-vert.js'),
    SingleFrag: require('./Single-frag.js'),
    SingleVert: require('./Single-vert.js'),
    TilemapGPULayerFrag: require('./TilemapGPULayer-frag.js'),
    TilemapGPULayerVert: require('./TilemapGPULayer-vert.js')

};
