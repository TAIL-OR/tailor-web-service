using System;
using System.Collections.Generic;
using System.Text;
using TAILOR.Localization;
using Volo.Abp.Application.Services;

namespace TAILOR;

/* Inherit your application services from this class.
 */
public abstract class TAILORAppService : ApplicationService
{
    protected TAILORAppService()
    {
        LocalizationResource = typeof(TAILORResource);
    }
}
