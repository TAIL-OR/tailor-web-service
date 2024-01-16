using TAILOR.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace TAILOR.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class TAILORController : AbpControllerBase
{
    protected TAILORController()
    {
        LocalizationResource = typeof(TAILORResource);
    }
}
