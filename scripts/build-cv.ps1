$toolsDir = Join-Path $PSScriptRoot "tools"
$localTectonic = Join-Path $toolsDir "tectonic.exe"

$tectonicCmd = ""

if (Get-Command tectonic -ErrorAction SilentlyContinue) {
    $tectonicCmd = "tectonic"
} elseif (Test-Path $localTectonic) {
    $tectonicCmd = $localTectonic
} else {
    Write-Host "Tectonic not found. Bootstrapping standalone binary..."
    & (Join-Path $PSScriptRoot "install-tectonic.ps1")
    if (Test-Path $localTectonic) {
        $tectonicCmd = $localTectonic
    } else {
        Write-Error "Failed to locate or install Tectonic."
        exit 1
    }
}

$cvTex = (Resolve-Path (Join-Path $PSScriptRoot "..\cv\Casper_Hildebrand_CV.tex")).Path
$outDir = (Resolve-Path (Join-Path $PSScriptRoot "..\public\cv")).Path

Write-Host "Compiling CV with $tectonicCmd..."
& $tectonicCmd $cvTex -o $outDir

if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCCESS: CV compiled successfully to public/cv/Casper_Hildebrand_CV.pdf"
} else {
    Write-Error "Tectonic compilation failed with exit code $LASTEXITCODE"
    exit 1
}
