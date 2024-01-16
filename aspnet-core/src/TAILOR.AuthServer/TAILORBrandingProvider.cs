using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace TAILOR;

[Dependency(ReplaceServices = true)]
public class TAILORBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "TAILOR";
}
