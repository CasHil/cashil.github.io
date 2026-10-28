$zipUrl = "https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic@0.17.0/tectonic-0.17.0-x86_64-pc-windows-msvc.zip"
$toolsDir = Join-Path $PSScriptRoot "tools"
if (!(Test-Path $toolsDir)) {
    New-Item -ItemType Directory -Path $toolsDir | Out-Null
}
$zipPath = Join-Path $toolsDir "tectonic.zip"
Write-Host "Downloading Tectonic from $zipUrl..."
Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath
Write-Host "Extracting Tectonic..."
Expand-Archive -Path $zipPath -DestinationPath $toolsDir -Force
Remove-Item $zipPath
$exePath = Join-Path $toolsDir "tectonic.exe"
if (Test-Path $exePath) {
    Write-Host "Tectonic successfully installed at: $exePath"
    & $exePath --version
} else {
    Write-Error "Failed to install Tectonic"
}
