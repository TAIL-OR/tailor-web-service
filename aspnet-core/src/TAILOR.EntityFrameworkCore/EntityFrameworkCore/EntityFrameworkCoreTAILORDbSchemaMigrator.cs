using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TAILOR.Data;
using Volo.Abp.DependencyInjection;

namespace TAILOR.EntityFrameworkCore;

public class EntityFrameworkCoreTAILORDbSchemaMigrator
    : ITAILORDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreTAILORDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the TAILORDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<TAILORDbContext>()
            .Database
            .MigrateAsync();
    }
}
